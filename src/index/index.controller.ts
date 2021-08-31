import { Body, Controller, Get, Param, Res, Post, UseGuards ,HttpStatus,BadRequestException,NotFoundException} from '@nestjs/common';
import { RolesGuard } from '../common/guards/roles.guard';
import { ParseIntPipe } from '../common/pipes/parse-int.pipe';
import { Index } from './interfaces/index.interface'
import { IndexService } from './index.service';
import {
  // ApiBearerAuth,
  // ApiOperation,
  ApiResponse,
  // ApiTags,
} from '@nestjs/swagger';

@UseGuards(RolesGuard)
@Controller('index')
export class IndexController {
  constructor(private readonly indexService: IndexService) {}

 
  @Get(':indexId')
  @ApiResponse({ status:  200, description: ' Index has Successfully found.'})
  @ApiResponse( { status: 404, description: 'Index has not been found.' } )
  async findOne(
    @Param('indexId', new ParseIntPipe())
    indexId: Number,
  ) {
      const index : Index = await  this.indexService.findOne(indexId);
      if(index.name === "not_found"){
        throw new NotFoundException("indexId not found")
      }
      return index
  }

}
