import { Module } from '@nestjs/common';
import { TodoItemService } from './todo-item.service';
import { TodoItemController } from './todo-item.controller';
@Module({
  //   imports: [ConfigModule, HttpModule, TypeOrmModule.forFeature([UserRepository])],
  //   controllers: [TodoItemController],
  //   providers: [TodoItemService],
  //   exports: [TodoItemService],
  //   controllers: [TodoItemController],
})
export class TodoItemModule {}
