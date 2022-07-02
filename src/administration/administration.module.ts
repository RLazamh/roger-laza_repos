import { Module } from '@nestjs/common';
import { OrganizationModule } from './organization/organization.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [OrganizationModule, DatabaseModule]
})
export class AdministrationModule {}
