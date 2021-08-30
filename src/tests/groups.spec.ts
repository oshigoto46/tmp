import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { GroupModule } from '../group/group.module';
import { GroupService } from '../group/group.service';
import { CoreModule } from '../core/core.module';

describe('Groups', () => {
  const catsService = { findAll: () => ['12,13'] };

  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [GroupModule, CoreModule],
    })
      .overrideProvider(GroupService)
      .useValue(catsService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`#1 /GET groups 200 `, () => {
    return request(app.getHttpServer()).get('/group-ids').expect(200).expect({
      data: catsService.findAll(),
    });
  });

  it(`#2 /GET groups inaccessablie path 404`, () => {
    return request(app.getHttpServer()).get('/group-idsssss').expect(404).expect({
      statusCode: 404,
      message: 'Cannot GET /group-idsssss',
      error: 'Not Found'
    });
  });


  afterAll(async () => {
    await app.close();
  });
});
