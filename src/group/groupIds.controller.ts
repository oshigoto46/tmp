import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { RolesGuard } from '../common/guards/roles.guard';
import { ParseIntPipe } from '../common/pipes/parse-int.pipe';
import { GroupService } from './group.service';

@UseGuards(RolesGuard)
@Controller('group-ids')
export class GroupIdsController {
  constructor(private readonly groupService: GroupService) {}

  @Get()
  async findAll(): Promise<Number[]> {
    let ret = await this.groupService.findAll();
    return ret;
  }
}
