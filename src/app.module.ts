import { Module } from '@nestjs/common';
import { IndexModule } from './index/index.module';
import { GroupModule } from './group/group.module';
import { LastBlockModule }   from './lastblock/lastblock.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [CoreModule, GroupModule,IndexModule,LastBlockModule],
})
export class AppModule {}
