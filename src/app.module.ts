import { Module } from '@nestjs/common';
import { GroupsModule } from './groups/groups.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [CoreModule, GroupsModule],
})
export class AppModule {}
