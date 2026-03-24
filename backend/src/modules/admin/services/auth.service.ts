import {
  ConflictException,
  HttpException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../../../database/prisma.service';
import { Role, User } from '@prisma/client';
import { SystemMessages } from '../../../common/constants/system-messages';
import { EventEmitter2 } from '@nestjs/event-emitter';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { AdminCreateDto, AdminLoginDto } from '../dto/admin.dto';

import { RoleService } from '../../../modules/role/role.service';
import { UserEntity } from 'src/modules/users/entities/user-entity';

@Injectable()
export class AdminAuthService {
  constructor(
    private prisma: PrismaService,
    private eventEmitter: EventEmitter2,
    // private uuidService: UuidService,
    private jwtService: JwtService,
    private config: ConfigService,
    private roleService: RoleService,
  ) {}

  private async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 10);
  }
  private generateOTP() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let otp = '';
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      otp += characters[randomIndex];
    }
    return otp;
  }
  private async validatePassword(
    email: string,
    inputPassword: string,
  ): Promise<boolean> {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user || !user.password || !user.expiresAt) {
      return false; // Invalid email or no password set
    }

    const now = new Date();
    if (now > user.expiresAt) {
      return false; // Password expired
    }
    const isMatch = await bcrypt.compare(inputPassword, user.password);
    if (!isMatch) {
      return false; // Password does not match
    }

    return true; // Password is valid
  }

  async invite(email: string) {
    const userExists = await this.prisma.user.findUnique({
      where: { email },
      include: { roles: true },
    });

    // Check if user already exists, and yes, check if user is not an admin
    if (userExists) {
      throw new ConflictException(SystemMessages.USER_CRUD.USER_EMAIL_EXISTS);
    }

    const roles: Role[] = await this.roleService.getRole(['ADMIN']);
    const newUser = await this.prisma.user.create({
      data: {
        firstName: '',
        lastName: '',
        email,
        roles: { connect: roles.map((role) => ({ id: role.id })) },
      },
      include: { roles: true },
    });
    // this.eventEmitter.emit('admin.send-invite', {
    //   email: newUser.email,
    //   firstName: newUser.firstName.trim() || 'User',
    // });
    return newUser;
  }

  async create(createUserDto: AdminCreateDto): Promise<UserEntity> {
    const existingUser = await this.prisma.user.findUnique({
      where: { email: createUserDto.email },
    });
    if (existingUser) {
      throw new ConflictException(SystemMessages.USER_CRUD.USER_EMAIL_EXISTS);
    }

    const roles: Role[] = await this.roleService.getRole(['ADMIN']);
    const user = await this.prisma.user.create({
      data: {
        ...createUserDto,
        roles: { connect: roles.map((role) => ({ id: role.id })) },
        isVerified: true,
      },
      include: { roles: true },
    });
    this.eventEmitter.emit('admin.send-invite', {
      email: user.email,
      firstName: user.firstName,
    });
    return new UserEntity(user);
  }
  async createAccessPassword(email: string) {
    try {
      const user = await this.prisma.user.findUnique({
        where: { email },
      });
      if (!user) {
        throw new UnauthorizedException(
          SystemMessages.AUTH_CRUD.INVALID_CREDENTIALS,
        );
      }

      const password = this.generateOTP();
      const hashedPassword = await this.hashPassword(password);
      const expiresAt = new Date(Date.now() + 2 * 60 * 1000);
      await this.prisma.user.update({
        where: { id: user.id },
        data: { password: hashedPassword, expiresAt: expiresAt },
      });

      // send password to user email
      this.eventEmitter.emit('admin.create-access-password', {
        email,
        password,
      });
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async adminLogin(
    adminLoginDto: AdminLoginDto,
  ): Promise<{ user: User; token: string; message: string }> {
    const { email, password } = adminLoginDto;

    const user = await this.prisma.user.findUnique({
      where: { email },
      include: { roles: true },
    });

    if (!user) {
      throw new UnauthorizedException(
        SystemMessages.AUTH_CRUD.INVALID_CREDENTIALS,
      );
    }

    const isPasswordValid = await this.validatePassword(email, password);
    if (!isPasswordValid) {
      throw new UnauthorizedException(SystemMessages.AUTH_CRUD.INVALID_PASSORD);
    }
    await this.prisma.user.update({
      where: { id: user.id },
      data: { lastLogin: new Date() },
      include: { roles: true },
    });

    const token = this.jwtService.sign(
      {
        userId: user.id,
        roles: user.roles?.map((role) => role.name),
        email: user.email,
      },
      { expiresIn: '120m', secret: this.config.get('JWT_SECRET') },
    );
    return {
      message: SystemMessages.AUTH_CRUD.SIGNIN_SUCCESS,
      token,
      user,
    };
  }
}
