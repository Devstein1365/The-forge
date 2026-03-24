import { IsEmail, IsEnum, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from '../guard/roles/roles.enum';

export class CreateAuthDto {
  @ApiProperty({
    description: 'The first name of the user',
    example: 'John',
  })
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({
    description: 'The last name of the user',
    example: 'Doe',
  })
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({
    description: 'The email address of the user',
    example: 'johndoe@email.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'The password of the user',
    example: 'adv1234',
  })
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    description: 'The role of the user',
    example: UserRole.SELLER,
    enum: UserRole,
  })
  @IsNotEmpty()
  @IsEnum(UserRole, { message: 'role must be a valid User Role' })
  role: UserRole;
}
