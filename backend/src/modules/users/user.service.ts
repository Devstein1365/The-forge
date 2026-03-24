import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import * as bcrypt from 'bcryptjs';
import { SystemMessages } from 'src/common/constants/system-messages';
import { User } from '@prisma/client';
import { userSelectFields } from './types/prisma.select';
import { UserEntity } from './entities/user-entity';
import { randomInt } from 'crypto';
import { CreateUserDto } from './dto/create-user.dto';
import { RoleService } from '../role/role.service';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private roleService: RoleService,
  ) {}
  private async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 10);
  }

  async create(createUserDto: CreateUserDto) {
    const existingUser = await this.prisma.user.findUnique({
      where: { email: createUserDto.email },
    });
    if (existingUser) {
      throw new ConflictException(SystemMessages.USER_CRUD.USER_EMAIL_EXISTS);
    }
    // const otp = randomInt(1234, 9999).toString();
    // const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes from now
    const { role, ...rest } = createUserDto;
    const roles = await this.roleService.getRole(role);

    const user = await this.prisma.user.create({
      data: {
        ...rest,
        password: await this.hashPassword(createUserDto.password),
        // verificationToken: otp,
        roles: { connect: roles.map((role) => ({ id: role.id })) },
        // expiresAt,
      },
    });

    // Set default notificaton preference
    // await this.notificationService.setDefaultNotificationPreferences(user.id);

    return new UserEntity(user);
  }

  async findById(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) {
      throw new NotFoundException(SystemMessages.USER_CRUD.USER_NOT_FOUND);
    }
    return user;
  }

  async findUserByEmail(email: string): Promise<User> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) {
      throw new NotFoundException(SystemMessages.USER_CRUD.USER_NOT_FOUND);
    }
    return user;
  }

  async updateUser(userId: string, data: Partial<User>) {
    // Hash the password only if it is provided
    if (data.password) {
      data.password = await this.hashPassword(data.password);
    }
    return this.prisma.user.update({
      where: { id: userId },
      data,
    });
  }

  async getUserProfile(id: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: {
        ...userSelectFields,
        roles: {
          select: { name: true },
        },
        shop: true,
      },
    });

    if (!user) {
      throw new NotFoundException(SystemMessages.USER_CRUD.USER_NOT_FOUND);
    }

    return user;
  }

  async deleteUser(id: string): Promise<void> {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) {
      throw new NotFoundException(SystemMessages.USER_CRUD.USER_NOT_FOUND);
    }

    await this.prisma.user.update({
      where: { id },
      data: {
        isDeleted: true,
        email: `deleted_${Date.now()}_${user.email}`,
      },
    });
  }
}
