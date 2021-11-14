/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { InjectQueryService, QueryService } from '@nestjs-query/core';
import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SubTaskEntity } from '../sub-task/sub-task.entity';
import { TodoItemEntity } from './todo-item.entity';

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
@QueryService(TodoItemEntity)
export class TodoItemService extends TypeOrmQueryService<TodoItemEntity> {
  constructor(
    @InjectRepository(TodoItemEntity) private todosRepository: Repository<TodoItemEntity>,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    @InjectQueryService(SubTaskEntity) private subTaskService: QueryService<SubTaskEntity>
  ) {
    super(todosRepository);
  }

  async getWithSubTasks(id: number): Promise<{ todoItem: TodoItemEntity; subTasks: SubTaskEntity[] }> {
    const todoItem = await this.todosRepository.findOneOrFail(id);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const subTasks = await this.subTaskService.query({ filter: { todoItemId: { eq: id.toString() } } });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    return { todoItem, subTasks };
  }
}
