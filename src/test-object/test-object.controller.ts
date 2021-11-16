import { Controller, Get, Post, Param, Body, Delete, HttpCode, HttpStatus, Put } from '@nestjs/common';
import { TestObjectService } from './test-object.service';
import { CreateTestDataDTO, UpdateTestDataDTO } from './test-object.dto';
import { TestObject } from './test-object';
import { index } from '../elastic-search/elasticSearch';
@Controller('test-object')
export class TestObjectController {
  constructor(private readonly service: TestObjectService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  all(): Promise<TestObject[]> {
    console.log('hoge===');
    console.log(index());
    console.log('hoge===');
    return this.service.all();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  one(@Param('id') id: number): Promise<TestObject> {
    return this.service.one(id);
  }

  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createTestDataDto: CreateTestDataDTO): Promise<TestObject> {
    return this.service.create(createTestDataDto);
  }

  @Put('update/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async update(@Param('id') id: number, @Body() updateTestDataDto: UpdateTestDataDTO): Promise<void> {
    this.service.update(id, updateTestDataDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: number): Promise<void> {
    this.service.remove(id);
  }
}
