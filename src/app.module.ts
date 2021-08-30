import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { IndexModule } from './index/index.module';
import { GroupModule } from './group/group.module';
import { LastBlockModule }   from './lastblock/lastblock.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [CoreModule, GroupModule,IndexModule,LastBlockModule,ConfigModule.forRoot()],
})
export class AppModule {}
