import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { randomInt } from 'crypto';
import * as bcrypt from 'bcryptjs';
import { CreateAuthDto } from './dto/create-auth.dto';
import { ConfigService } from '@nestjs/config';
import { SystemMessages } from '../../common/constants/system-messages';
import { LoginUserDto } from './dto/login-auth.dto';
import { VerifyEmailDto } from './dto/verify-email.dto';

// import { ForgotPasswordEvent } from './events';
// import { EventEmitter2 } from '@nestjs/event-emitter';
import { ResetUserPasswordDto } from './dto/reset-password.dto';
import { UserService } from '../users/user.service';
import { UserEntity } from '../users/entities/user-entity';
import { DataResponse } from 'src/common/types/api-response';

@Injectable()
export class AuthService {
  constructor(
    // private eventEmitter: EventEmitter2,
    private userService: UserService,
    private jwtService: JwtService,
    private config: ConfigService,
  ) {}

  private generateOTP(): string {
    return randomInt(1234, 9999).toString();
  }

  async register(
    createUserDto: CreateAuthDto,
  ): Promise<{ message: string; data: UserEntity }> {
    const newUser = await this.userService.create(createUserDto);

    const user = new UserEntity(newUser);
    // this.eventEmitter.emit('user.registered', {
    //   email: user.email,
    //   firstName: user.firstName,
    //   verificationCode: user.verificationToken,
    // });
    return { message: SystemMessages.AUTH_CRUD.SIGNUP_SUCCESS, data: user };
  }

  async verifyEmailOTP(dto: VerifyEmailDto) {
    const user = await this.userService.findUserByEmail(dto.email);

    if (user && user.isVerified) {
      throw new UnauthorizedException(
        SystemMessages.AUTH_CRUD.EMAIL_ALREADY_VERIFIED,
      );
    }

    if (user.verificationToken !== dto.otp || user.expiresAt! < new Date()) {
      throw new UnauthorizedException(SystemMessages.AUTH_CRUD.INVALID_OTP);
    }

    await this.userService.updateUser(user.id, {
      verificationToken: null,
      isVerified: true,
    });
    return { message: SystemMessages.AUTH_CRUD.EMAIL_VERIFY_SUCCESS };
  }

  async resendEmailOTP(email: string): Promise<DataResponse<null>> {
    const user = await this.userService.findUserByEmail(email);

    if (user.isVerified) {
      throw new BadRequestException(
        SystemMessages.AUTH_CRUD.EMAIL_ALREADY_VERIFIED,
      );
    }

    const token = this.generateOTP();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes expiration
    await this.userService.updateUser(user.id, {
      verificationToken: token,
      expiresAt,
    });

    // this.eventEmitter.emit('auth.resend-otp', { email, token });
    return { message: SystemMessages.AUTH_CRUD.RESEND_OTP_SUCCESS };
  }

  async validateUser(dto: LoginUserDto) {
    const user = await this.userService.findUserByEmail(dto.email);

    if (user.password && (await bcrypt.compare(dto.password, user.password))) {
      return new UserEntity(user);
    }
    throw new UnauthorizedException(
      SystemMessages.AUTH_CRUD.INVALID_CREDENTIALS,
    );
  }

  async login(
    dto: LoginUserDto,
  ): Promise<DataResponse<{ token: string; user: UserEntity }>> {
    const user = await this.validateUser(dto);

    if (!user.isVerified) {
      throw new ForbiddenException(SystemMessages.AUTH_CRUD.EMAIL_NOT_VERIFIED);
    }

    await this.userService.updateUser(user.id, { lastLogin: new Date() });

    const token = this.jwtService.sign(
      { userId: user.id, roles: user.roles },
      { expiresIn: '7d', secret: this.config.get('JWT_SECRET') },
    );
    return {
      message: SystemMessages.AUTH_CRUD.SIGNIN_SUCCESS,
      data: { token, user },
    };
  }

  async forgotPassword(email: string) {
    const user = await this.userService.findUserByEmail(email);

    const token = this.generateOTP();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes expiration
    await this.userService.updateUser(user.id, {
      resetToken: token,
      expiresAt,
    });

    const resetUrl = `http://localhost:3000/auth/reset-password?token=${token}`;

    // const forgotPasswordEvent = new ForgotPasswordEvent(
    //   user.firstName,
    //   user.email,
    //   token,
    //   resetUrl,
    // );

    // this.eventEmitter.emit(forgotPasswordEvent.name, forgotPasswordEvent);
    return { message: SystemMessages.AUTH_CRUD.RESET_MAIL_SENT };
  }

  async resetPasswordwithUrl(token: string, newPassword: string) {
    const user = await this.userService.findUserByEmail(token);

    if (!user.isVerified) {
      throw new UnauthorizedException(
        SystemMessages.AUTH_CRUD.EMAIL_NOT_VERIFIED,
      );
    }

    await this.userService.updateUser(user.id, {
      password: newPassword,
      resetToken: null,
      expiresAt: null,
    });

    return { message: SystemMessages.AUTH_CRUD.RESET_SUCCESS };
  }

  async resetPasswordWithCode(resetPasswordDto: ResetUserPasswordDto) {
    const { email, otp, newPassword } = resetPasswordDto;
    const user = await this.userService.findUserByEmail(email);

    if (!user.isVerified) {
      throw new UnauthorizedException(
        SystemMessages.AUTH_CRUD.EMAIL_NOT_VERIFIED,
      );
    }

    if (user.resetToken !== otp || user.expiresAt! < new Date()) {
      throw new UnauthorizedException(SystemMessages.AUTH_CRUD.INVALID_OTP);
    }

    const data = await this.userService.updateUser(user.id, {
      password: newPassword,
      resetToken: null,
      expiresAt: null,
    });

    return { message: SystemMessages.AUTH_CRUD.RESET_SUCCESS, data };
  }

  async logout() {
    // this.eventEmitter.emit('auth.logout');
    return { message: SystemMessages.AUTH_CRUD.LOGOUT_SUCCESS };
  }
}
