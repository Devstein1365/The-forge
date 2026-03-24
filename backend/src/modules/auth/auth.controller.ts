import {
  Controller,
  Post,
  Body,
  HttpCode,
  ClassSerializerInterceptor,
  UseInterceptors,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LoginUserDto } from './dto/login-auth.dto';
import { VerifyEmailDto } from './dto/verify-email.dto';
import { EmailDto } from './dto/email.dto';
import { DataResponse } from '../../common/types/api-response';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { ResetUserPasswordDto } from './dto/reset-password.dto';
import { UserEntity } from '../users/entities/user-entity';

@Controller('auth')
@UseInterceptors(ClassSerializerInterceptor)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiCreatedResponse({
    description: 'User created successfully',
    type: UserEntity,
  })
  @Post('signup')
  async signup(
    @Body() createAuthDto: CreateAuthDto,
  ): Promise<DataResponse<UserEntity>> {
    return await this.authService.register(createAuthDto);
  }
  @Post('login')
  @HttpCode(200)
  login(@Body() AuthDto: LoginUserDto) {
    return this.authService.login(AuthDto);
  }

  @Post('forgot-password')
  @HttpCode(200)
  async forgotPassword(@Body() emailDto: EmailDto) {
    return await this.authService.forgotPassword(emailDto.email);
  }

  @Post('reset-password')
  @HttpCode(200)
  async resetPassword(@Body() resetPasswordDto: ResetUserPasswordDto) {
    return await this.authService.resetPasswordWithCode(resetPasswordDto);
  }

  @Post('verify-email')
  @HttpCode(200)
  async verifyEmail(@Body() verifyDto: VerifyEmailDto) {
    return this.authService.verifyEmailOTP(verifyDto);
  }

  @Post('resend-verification')
  @HttpCode(200)
  resendVerification(@Body() emailDto: EmailDto) {
    return this.authService.resendEmailOTP(emailDto.email);
  }

  @Post('logout')
  @HttpCode(200)
  logout() {
    return this.authService.logout();
  }
}
