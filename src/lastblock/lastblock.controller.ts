import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { RolesGuard } from '../common/guards/roles.guard';
import { LastBlockservice } from './lastblock.service';
import { Block } from './interfaces/block.interface'
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@UseGuards(RolesGuard)
@Controller('last-block')
export class LastBlockontroller {
  constructor(private readonly lastblockService: LastBlockservice) {}

 
  @Get()
  @ApiResponse({ status: 200, description: 'Last block has Successfully found.'})
  async findAll() :Promise<Block>{
    return this.lastblockService.findAll()
  }
}
