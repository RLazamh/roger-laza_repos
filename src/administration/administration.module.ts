import { Module } from '@nestjs/common';
import { OrganizationModule } from './organization/organization.module';
import { TribesModule } from './tribes/tribes.module';

@Module({
    imports: [
      OrganizationModule, 
      TribesModule
    ]
})
export class AdministrationModule {}
