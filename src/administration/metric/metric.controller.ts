import { Controller, Post } from '@nestjs/common';
import { MetricService } from './metric.service';
import { Metric } from '../entities';
import { CreateMetricDto } from '../dtos';

@Controller('metric')
export class MetricController {
    constructor(private readonly _organization_service: MetricService ){}

    @Post()
    createOrganization() : Promise<Metric> {
        const create_metric_dto = new CreateMetricDto()
        create_metric_dto.coverage = 1;
        create_metric_dto.bugs = 1;
        create_metric_dto.vulnerabilities = 1;
        create_metric_dto.hostpost = 1;
        create_metric_dto.code_smell = 1;
        create_metric_dto.repository = 1;
        return this._organization_service.create(create_metric_dto);
    }
}
