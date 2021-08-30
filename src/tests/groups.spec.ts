import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { GroupModule } from '../group/group.module';
import { GroupService } from '../group/group.service';
import { CoreModule } from '../core/core.module';
import { _ } from 'lodash'

describe('Groups', () => {

  const groupService = { 
  findAll: () => ['12,13'] , 
  findOne: () => [{"0":"DeFi Indexes",
                    "1":["0","1","2","3","4","5","6"],
                    "name":"DeFi Indexes",
                    "indexes":["0","1","2","3","4","5","6"]}]
 };

  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [GroupModule, CoreModule],
    })
      .overrideProvider(GroupService)
      .useValue(groupService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`#1 /GET groups 200 `, () => {
    return request(app.getHttpServer()).get('/group-ids').expect(200).expect({
      data: groupService.findAll(),
    });
  });

  it(`#2 /GET groups inaccessablie path 404`, () => {
    return request(app.getHttpServer()).get('/group-idsssss').expect(404).expect({
      statusCode: 404,
      message: 'Cannot GET /group-idsssss',
      error: 'Not Found'
    });
  });

  it(`#3 /GET gropuid found path 200`, () => {
    return request(app.getHttpServer()).get('/group/12')
    .then(r => { expect(r.statusCode).toBe(200)
                 let actual = JSON.parse(r.text.split("\\")[0])
                 // some trick for workaround
                 expect(_.isEqual(actual.data[0].indexes,['0','1','2','3','4','5','6'])).toBe(true)
                 expect(actual.data[0].name).toBe("DeFi Indexes")
                //    Received: "{\"data\":[{\"0\":\"DeFi Indexes\",\"1\":[\"0\",\"1\",\"2\",\"3\",\"4\",\"5\",\"6\"],\"name\":\"DeFi Indexes\",\"indexes\":[\"0\",\"1\",\"2\",\"3\",\"4\",\"5\",\"6\"]}]}"
    })
   
  });
  

  afterAll(async () => {
    await app.close();
  });
});
