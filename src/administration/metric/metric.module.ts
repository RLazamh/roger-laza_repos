import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/config/database.module';
import { MetricController } from './metric.controller';
import { metricProvider } from './metric.provider';
import { MetricService } from './metric.service';

@Module({
  imports:[DatabaseModule],
  controllers: [MetricController],
  providers:[
    ...metricProvider,
    MetricService
]
})
export class MetricModule {}
