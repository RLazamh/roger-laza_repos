import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/config/database.module';
import { RepositoryController } from './repository.controller';
import { repositoryProvider } from './repository.provider';
import { RepositoryService } from './repository.service';

@Module({
  imports:[DatabaseModule],
  controllers: [RepositoryController],
  providers:[
    ...repositoryProvider,
    RepositoryService
  ]
})
export class RepositoryModule {}
