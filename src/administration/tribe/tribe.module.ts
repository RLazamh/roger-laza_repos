import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/config/database.module';
import { TribeController } from './tirbe.controller';
import { tribeProvider } from './tribe.provider';
import { TribeService } from './tribe.service';

@Module({
    imports:[DatabaseModule],
    controllers:[TribeController],
    providers:[
        ...tribeProvider,
        TribeService
    ]
})
export class TribesModule {}
