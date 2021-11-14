import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users2.service';
import { UsersController } from './users2.controller';
import { User2 } from './users2.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User2])],
  exports: [TypeOrmModule],
  providers: [UsersService],
  controllers: [UsersController],
})
export class Users2Module {}
