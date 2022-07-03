import { Module } from '@nestjs/common';
import { OrganizationModule } from './organization/organization.module';
import { TribesModule } from './tribe/tribe.module';
import { RepositoryModule } from './repository/repository.module';
import { MetricModule } from './metric/metric.module';

@Module({
    imports: [
      OrganizationModule, 
      TribesModule, RepositoryModule, MetricModule
    ]
})
export class AdministrationModule {}
