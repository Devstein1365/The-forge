import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Length } from 'class-validator';
export class AdminCreateDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  email: string;
}

export class AdminLoginDto {
  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @Length(6, 6)
  password: string;
}
