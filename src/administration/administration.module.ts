import { Module } from '@nestjs/common';
import { OrganizationModule } from './organization/organization.module';
import { TribesModule } from './tribe/tribe.module';

@Module({
    imports: [
      OrganizationModule, 
      TribesModule
    ]
})
export class AdministrationModule {}
