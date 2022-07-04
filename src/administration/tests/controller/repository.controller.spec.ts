import { Test, TestingModule } from '@nestjs/testing';
import { repositoryProvider } from '../../repository/repository.provider';
import { RepositoryService } from '../../repository/repository.service';
import { DatabaseModule } from '../../database/database.module';
import { RepositoryController } from '../../repository/repository.controller';
import { HttpModule } from '@nestjs/common'
import * as request from 'supertest'

describe('RepositoryController', () => {
  let controller: RepositoryController;
  let httpServer;
  let app;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule, HttpModule],
      controllers: [RepositoryController],
      providers: [
        ...repositoryProvider,
        RepositoryService
      ]
    }).compile();

    app = module.createNestApplication()
    await app.init()
    controller = module.get<RepositoryController>(RepositoryController);
    httpServer = app.getHttpServer()
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('when getRepositories method is called', () => {
    it('should return the next object', async () => {
      const mockResponse = jest.spyOn(controller, 'getRepositories').mockImplementation(() => Promise.resolve(
        [
          {
          "id": 1,
          "state": 604
          },
          {
          "id": 2,
          "state": 605
          },
          {
          "id": 3,
          "state": 606
          }
        ]
      ));

      const get = await request(httpServer).get('/repository/fake').expect(200)

      console.log(get)

      expect(get.body).toMatchObject([
        {
          "id": 1,
          "state": 604
          },
          {
          "id": 2,
          "state": 605
          },
          {
          "id": 3,
          "state": 606
          }
      ])
      expect(mockResponse).toBeDefined()
      expect(mockResponse).toHaveBeenCalledTimes(1)
      mockResponse.mockRestore()
    })
  })
});
