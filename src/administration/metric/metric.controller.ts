import { Body, Controller, Post } from '@nestjs/common';
import { MetricService } from './metric.service';
import { Metric } from '../entities';
import { CreateMetricDto } from '../dtos';

@Controller('metric')
export class MetricController {
    constructor(private readonly _organization_service: MetricService ){}

    @Post()
    createOrganization(@Body() dto : CreateMetricDto) : Promise<Metric> {
        return this._organization_service.create(dto);
    }
}
