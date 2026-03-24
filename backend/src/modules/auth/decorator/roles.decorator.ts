import { SetMetadata } from '@nestjs/common';
import { Role } from '../guard/roles/roles.enum';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: Role[] | string[]) =>
  SetMetadata(ROLES_KEY, roles);
