import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateTribeDto } from "../dtos/create.tribe.dto";
import { TribeService } from "./tribe.service";
import { Tribe } from "../entities";
import { RepositoryService } from "../repository/repository.service";

@Controller('tribe')
export class TribeController {
    constructor(
        private readonly _tribe_service: TribeService,
        private readonly _repository_service : RepositoryService
    ){}
    
    @Post()
    createTribe(@Body() dto : CreateTribeDto) : Promise<Tribe> {
        return this._tribe_service.create(dto);
    }

    @Get('/metrics')
    async getMetrics(
        @Param('id') id: number,
    ) : Promise<any> {
        const tribe = await this._tribe_service.getOne(id);
        const repositories = await this._repository_service.getAllByTribe(tribe.id);
        return repositories;
    }

    @Get(':id')
    getTribe() : number {
        return 200;
    }

}
