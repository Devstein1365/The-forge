import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { SystemMessages } from '../../../common/constants/system-messages';
import { RolesGuard } from '../../../modules/auth/guard';
import { Roles } from '../../../modules/auth/decorator/roles.decorator';
import { Permissions } from '../decorator/permission.decorator';
import { PermissionsGuard } from '../guard/permission.guard';
import { PermissionService } from '../services/permission.service';
import { CreatePermissionDto } from '../dto/permission.dto';

@Controller('admin/permissions')
@UseGuards(RolesGuard, PermissionsGuard)
export class PermissionController {
  constructor(private readonly permissionService: PermissionService) {}

  @Get()
  async getAllPermissions() {
    const permissions = await this.permissionService.getPermissions();
    return {
      message: SystemMessages.PERMISSION.RETRIEVE_SUCCESS,
      data: permissions,
    };
  }

  @Roles('SUPERADMIN')
  @Permissions('CREATE_PERMISSION')
  @Post()
  async createPermission(@Body() createPermissionDto: CreatePermissionDto) {
    const newPermission = await this.permissionService.createPermission(
      createPermissionDto.name,
      createPermissionDto.description,
    );
    return {
      message: SystemMessages.PERMISSION.CREATE_SUCCESS,
      data: newPermission,
    };
  }
}
