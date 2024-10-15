import { Module } from '@nestjs/common';
import { StaffRoleService } from './staff_role.service';
import { StaffRoleController } from './staff_role.controller';

@Module({
  controllers: [StaffRoleController],
  providers: [StaffRoleService],
})
export class StaffRoleModule {}
