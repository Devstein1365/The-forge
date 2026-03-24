import { Controller, Body, Post, HttpCode } from '@nestjs/common';
import { SystemMessages } from '../../../common/constants/system-messages';
import { EmailDto } from '../../../modules/auth/dto/email.dto';
import { AdminCreateDto, AdminLoginDto } from '../dto/admin.dto';
import { AdminAuthService } from '../services/auth.service';

@Controller('admin/auth')
export class AdminAuthController {
  constructor(private readonly authService: AdminAuthService) {}

  @Post('create-access-password')
  @HttpCode(201)
  async createAccessPassword(@Body() emailDto: EmailDto) {
    await this.authService.createAccessPassword(emailDto.email);
    return {
      message: SystemMessages.ADMIN.PASSWORD_SENT,
    };
  }

  @Post('register')
  async register(@Body() createUserDto: AdminCreateDto) {
    const data = await this.authService.create(createUserDto);
    return data;
  }

  @Post('login')
  @HttpCode(200)
  async login(@Body() adminLoginDto: AdminLoginDto) {
    const data = await this.authService.adminLogin(adminLoginDto);
    return data;
  }
}
