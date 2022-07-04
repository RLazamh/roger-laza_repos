import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateRepositoryDto } from '../dtos/create.repository.dto';
import { RepositoryEntity } from '../entities';
import { RepositoryService } from './repository.service';

@Controller('repository')
export class RepositoryController {
    constructor(private readonly _repository_service: RepositoryService ){}

    @Get()
    async getAll() {
        const data = await this._repository_service.getAll();
        return { data };
    }

    @Post()
    async createRepository(@Body() dto : CreateRepositoryDto) : Promise<RepositoryEntity> {
        return this._repository_service.create(dto);
    }

    @Get('fake')
    async getRepositories() : Promise<any> {
        return 'Hello world';
    }
}
