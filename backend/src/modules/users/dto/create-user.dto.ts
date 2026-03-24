import { IsEmail, IsNotEmpty } from 'class-validator';
import { UserRole } from 'src/modules/auth/guard/roles/roles.enum';

export class CreateUserDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  role: UserRole;
}
