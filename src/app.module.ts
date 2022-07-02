import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { typeOrmConfig } from './config/typeorm.config';
import { AdministrationModule } from './administration/administration.module';


@Module({
  imports: [
    UsersModule, 
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(typeOrmConfig),
    AdministrationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
