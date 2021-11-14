import { Test, TestingModule } from '@nestjs/testing';
import { getQueryServiceToken } from '@nestjs-query/core';
import { getRepositoryToken } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { TodoItemEntity } from '../todo-item/todo-item.entity';
import { SubTaskEntity } from '../sub-task/sub-task.entity';
import { TodoItemService } from '../todo-item/todo-item.service';

// We create some fake entiites, just for testing. Here they are empty,
// but they can be more complex, depending on the testing cases.
const subTasks = [new SubTaskEntity(), new SubTaskEntity(), new SubTaskEntity()];
const oneTodo: TodoItemEntity = plainToClass(TodoItemEntity, {
  id: '1',
  title: 'A test todo',
  description: 'to do description',
});

describe('TodosItemService', () => {
  let service: TodoItemService; // Removed type, compared to the nestjs examples

  // We mock the responses of the two services.
  // The mocks in this example are very simple, but they can be more complex, depending on the test cases.

  const mockedSubTaskService = {
    // mock the query method that is used by getWithSubTasks
    query: jest.fn(query => Promise.resolve(subTasks)),
  };
  const mockedRepo = {
    // mock the repo `findOneOrFail`
    findOneOrFail: jest.fn(id => Promise.resolve(oneTodo)),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        // Provide the original service
        TodoItemService,
        // Mock the repository using the `getRepositoryToken` from @nestjs/typeorm
        {
          provide: getRepositoryToken(TodoItemEntity),
          useValue: mockedRepo,
        },
        // Mock the SubTask QueryService using the `getQueryServiceToken` from @nestjs-query/core
        {
          provide: getQueryServiceToken(SubTaskEntity),
          useValue: mockedSubTaskService,
        },
      ],
    }).compile();
    // get the service from the testing module.
    service = await module.get(TodoItemService);
  });

  // reset call counts and called with arguments after each spec
  afterEach(() => jest.clearAllMocks());

  // Now we are ready to write the tests.
  describe('getWithSubTasks', () => {
    it('should return a TodoItem with subTasks', async () => {
      // We can use jest spies to inspect if functions are called ...

      // create a spy for the repository findOneOrFail method
      const findOneOrFailSpy = jest.spyOn(mockedRepo, 'findOneOrFail');
      // create a spy for the mocked subTaskService query method
      const querySpy = jest.spyOn(mockedSubTaskService, 'query');

      // When we call a service function the following things happen:
      // - the real service function is called, so we can test its code
      // - the mocked repository method is called
      // - the mocked subTask query service method is called
      // note that if the service calls a function in a repo or query service that is not defined by a mock, the test
      // will fail
      const todo = await service.getWithSubTasks(oneTodo.id);
      // check the result against the expected results
      console.log(todo);
      expect(todo).toEqual({ todoItem: oneTodo, subTasks });

      // Ensure that the spies are called once with the appropriate arguments
      expect(findOneOrFailSpy).toHaveBeenCalledTimes(1);
      expect(findOneOrFailSpy).toHaveBeenCalledWith(oneTodo.id);
      expect(querySpy).toHaveBeenCalledTimes(1);
      expect(querySpy).toHaveBeenCalledWith({ filter: { todoItemId: { eq: oneTodo.id } } });
    });
  });
});
