import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { Roles } from '../common/decorators/roles.decorator';
import { RolesGuard } from '../common/guards/roles.guard';
import { ParseIntPipe } from '../common/pipes/parse-int.pipe';
import { GroupsService } from './groups.service';
import { Groups } from './interfaces/groups.interface';

@UseGuards(RolesGuard)
@Controller('groups')
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @Get()
  async findAll(): Promise<Number[]> {
    let ret = await this.groupsService.findAll();
    return ret;
  }

  @Get(':groupId')
  async findOne(
    @Param('groupId', new ParseIntPipe())
    groupId: Number,
  ) {
    return this.groupsService.findOne(groupId)
  }
}
