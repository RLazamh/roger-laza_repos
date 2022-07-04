import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { RepositoryModule } from '../repository/repository.module';
import { repositoryProvider } from '../repository/repository.provider';
import { RepositoryService } from '../repository/repository.service';
import { TribeController } from './tirbe.controller';
import { tribeProvider } from './tribe.provider';
import { TribeService } from './tribe.service';

@Module({
    imports:[
        DatabaseModule,
        RepositoryModule
    ],
    controllers:[TribeController],
    providers:[
        ...tribeProvider,
        TribeService,
        ...repositoryProvider,
        RepositoryService
    ]
})
export class TribesModule {}
