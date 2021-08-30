import { Module } from '@nestjs/common';
import { IndexModule } from './index/index.module';
import { GroupModule } from './group/group.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [CoreModule, GroupModule,IndexModule],
})
export class AppModule {}
