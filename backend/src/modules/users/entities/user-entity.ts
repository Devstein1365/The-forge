import { Exclude } from 'class-transformer';
import { Role } from '@prisma/client';

export class UserEntity {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  roles: Role[];

  @Exclude()
  password: string;

  @Exclude()
  resetToken: string | null;
  @Exclude()
  isVerified: boolean;

  @Exclude()
  expiresAt: Date | null;

  @Exclude()
  createdAt: Date;

  @Exclude()
  updatedAt: Date;

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}
