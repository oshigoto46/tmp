import { Module } from '@nestjs/common';
import { LastBlockontroller } from './lastblock.controller';
import { LastBlockservice } from './lastblock.service';

@Module({
  controllers: [LastBlockontroller],
  providers: [LastBlockservice],
})
export class LastBlockModule {}
