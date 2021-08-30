import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { Roles } from '../common/decorators/roles.decorator';
import { RolesGuard } from '../common/guards/roles.guard';
import { ParseIntPipe } from '../common/pipes/parse-int.pipe';
import { GroupsService } from './groups.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { Groups } from './interfaces/groups.interface';

@UseGuards(RolesGuard)
@Controller('groups')
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @Post()
  @Roles('admin')
  async create(@Body() createCatDto: CreateCatDto) {
    this.groupsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Groups[]> {
    let ret = await this.groupsService.findAll();
    return ret;
  }

  @Get(':age')
  findOne(
    @Param('age', new ParseIntPipe())
    age: number,
  ) {
    return this.groupsService.findOne()
  }
}
