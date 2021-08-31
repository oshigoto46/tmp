import { Body, Controller, Get, Param, Res, Post, UseGuards ,HttpStatus,BadRequestException,NotFoundException} from '@nestjs/common';
import { RolesGuard } from '../common/guards/roles.guard';
import { ParseIntPipe } from '../common/pipes/parse-int.pipe';
import { GroupService } from './group.service';
import {
  // ApiBearerAuth,
  // ApiOperation,
  ApiResponse,
  // ApiTags,
} from '@nestjs/swagger';

@UseGuards(RolesGuard)
@Controller('group-ids')
export class GroupIdsController {
  constructor(private readonly groupService: GroupService) {}

  @Get()
  @ApiResponse({ status:  200, description: ' GroupIds have Successfully found.'})
  async findAll(): Promise<Number[]> {
    let ret = await this.groupService.findAll();
    return ret;
  }
}
