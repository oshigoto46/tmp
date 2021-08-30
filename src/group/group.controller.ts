import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { RolesGuard } from '../common/guards/roles.guard';
import { ParseIntPipe } from '../common/pipes/parse-int.pipe';
import { GroupService } from './group.service';
import { Group } from './interfaces/group.interface';

@UseGuards(RolesGuard)
@Controller('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  // @Get()
  // async findAll(): Promise<Number[]> {
  //   let ret = await this.groupService.findAll();
  //   return ret;
  // }

  @Get(':groupId')
  async findOne(
    @Param('groupId', new ParseIntPipe())
    groupId: Number,
  ) :Promise<Group[]>{
    return this.groupService.findOne(groupId)
  }
}
