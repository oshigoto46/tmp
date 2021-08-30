import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { RolesGuard } from '../common/guards/roles.guard';
import { LastBlockservice } from './lastblock.service';

@UseGuards(RolesGuard)
@Controller('last-block')
export class LastBlockontroller {
  constructor(private readonly lastblockService: LastBlockservice) {}

 
  @Get()
  async findAll() {
    return this.lastblockService.findAll()
  }
}
