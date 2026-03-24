import {
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorator/roles.decorator';
import { Role } from './roles/roles.enum';
import { SystemMessages } from '../../../common/constants/system-messages';
import { IUser } from '../../admin/types';
import { SKIP_AUTH_KEY } from '../decorator/skip-auth.decorator';
import { JwtAuthGuard } from './jwt-auth.guard';

@Injectable()
export class RolesGuard extends JwtAuthGuard {
  constructor(reflector: Reflector) {
    super(reflector);
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const skipAuth = this.reflector.get<boolean>(
      SKIP_AUTH_KEY,
      context.getHandler(),
    );
    if (skipAuth) {
      return true;
    }

    const isAuthenticated = await super.canActivate(context);
    if (!isAuthenticated) {
      throw new UnauthorizedException(SystemMessages.UNAUTHORIZED);
    }

    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }

    const { user } = context.switchToHttp().getRequest<{ user: IUser }>();

    if (!user.roles || user.roles.length === 0) {
      throw new ForbiddenException(SystemMessages.ROLE.USER_HAS_NO_ROLES);
    }

    // Check if the required roles include 'ADMIN' and allow SUPERADMIN user
    const requiresAdminRole = requiredRoles.includes(Role.ADMIN);
    if (requiresAdminRole) {
      const isSuperAdmin = user.roles.some(
        (userRole: { name: string; description: string }) =>
          userRole.name === 'SUPERADMIN',
      );
      if (isSuperAdmin) {
        return true;
      }
    }

    return requiredRoles.some((role) =>
      user.roles.some(
        (userRole: { name: string; description: string }) =>
          userRole.name === role,
      ),
    );
  }
}
