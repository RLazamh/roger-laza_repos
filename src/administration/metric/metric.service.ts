import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { CreateMetricDto } from "../dtos";
import { Metric } from "../entities";


@Injectable()
export class MetricService{
    constructor(
        @Inject('METRIC_REPOSITORY')
        private readonly _metric_repositoy : Repository<Metric>
    ){}

    async create(create_metric_dto: CreateMetricDto): Promise<Metric> {
        const new_metric = await this._metric_repositoy.save({
            coverage: create_metric_dto.coverage,
            bugs: create_metric_dto.bugs,
            vulnerabilities: create_metric_dto.vulnerabilities,
            hostpost: create_metric_dto.hostpost,
            code_smell: create_metric_dto.code_smell,
            repository: {id : create_metric_dto.repository } 

        });
        return new_metric;
    }

    async findAll(): Promise<Metric[]> {
        return this._metric_repositoy.find();
    }

    getOrganization() : number {
        return 200;
    }
}