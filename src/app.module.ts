import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { IndexModule } from './index/index.module';
import { GroupModule } from './group/group.module';
import { LastBlockModule } from './lastblock/lastblock.module';
import { CoreModule } from './core/core.module';
import { CompanyReviewController } from './company-review/company-review.controller';
import { AuthenticationController } from './authentication/authentication.controller';
import { AuthenticationService } from './authentication/authentication.service';
//import { UsersService } from './users/users.service';
//import { UsersService as UsersService2 } from './users2/users2.service';
//import { UsersController as UsersControllers2 } from './users2/users2.controller';
import { Users2Module } from './users2/users2.module';
import { TodoItemService } from './todo-item/todo-item.service';
import { SubTaskController } from './sub-task/sub-task.controller';
import { TodoItemModule } from './todo-item/todo-item.module';
import { SubTaskModule } from './sub-task/sub-task.module';
require('dotenv').config();

@Module({
  imports: [
    CoreModule,
    GroupModule,
    IndexModule,
    LastBlockModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      //port: parseInt(process.env.PORT),
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: 'nestday7',
      entities: [],
      synchronize: true,
    }),
    // Users2Module,
    TodoItemModule,
    SubTaskModule,
  ],
  //controllers: [CompanyReviewController, AuthenticationController, UsersControllers2, SubTaskController],
  controllers: [CompanyReviewController, AuthenticationController, SubTaskController],
  providers: [AuthenticationService],
  // providers: [AuthenticationService, UsersService2],
})
export class AppModule {}
