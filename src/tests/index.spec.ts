// import { INestApplication } from '@nestjs/common';
// import { Test } from '@nestjs/testing';
// import * as request from 'supertest';
// import { IndexModule } from '../index/index.module';
// import { IndexService } from '../index/index.service';
// import { CoreModule } from '../core/core.module';

// describe('Indexes', () => {
//   const indexService = { findAll: () => ['12,13'] };

//   let app: INestApplication;

//   beforeAll(async () => {
//     const moduleRef = await Test.createTestingModule({
//       imports: [IndexModule, CoreModule],
//     })
//       .overrideProvider(IndexService)
//       .useValue(catsService)
//       .compile();

//     app = moduleRef.createNestApplication();
//     await app.init();
//   });

//   it(`#1 /GET groups 200 `, () => {
//     return request(app.getHttpServer()).get('/group-ids').expect(200).expect({
//       data: catsService.findAll(),
//     });
//   });

//   it(`#2 /GET groups inaccessablie path 404`, () => {
//     return request(app.getHttpServer()).get('/group-idsssss').expect(404).expect({
//       statusCode: 404,
//       message: 'Cannot GET /group-idsssss',
//       error: 'Not Found'
//     });
//   });


//   afterAll(async () => {
//     await app.close();
//   });
// });
