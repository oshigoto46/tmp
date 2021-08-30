import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { RolesGuard } from '../common/guards/roles.guard';
import { ParseIntPipe } from '../common/pipes/parse-int.pipe';
import { IndexService } from './index.service';

@UseGuards(RolesGuard)
@Controller('index')
export class IndexController {
  constructor(private readonly indexService: IndexService) {}

 
  @Get(':indexId')
  async findOne(
    @Param('indexId', new ParseIntPipe())
    indexId: Number,
  ) {
    return this.indexService.findOne(indexId)
  }
}
