
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/config/database.module';
import { OrganizationController } from './organization.controller';
import { organizationProvider } from './organization.provider';
import { OrganizationService } from './organization.service';

@Module({
    imports:[DatabaseModule],
    controllers:[OrganizationController],
    providers:[
        ...organizationProvider,
        OrganizationService
    ]
})
export class OrganizationModule {}