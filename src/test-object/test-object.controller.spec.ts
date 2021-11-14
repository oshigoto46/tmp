import { Test, TestingModule } from '@nestjs/testing';
import { TestObjectController } from './test-object.controller';

describe('TestObjectController', () => {
  let controller: TestObjectController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestObjectController],
    }).compile();

    controller = module.get<TestObjectController>(TestObjectController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
