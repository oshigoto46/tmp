import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { IndexModule } from './index/index.module';
import { GroupModule } from './group/group.module';
import { LastBlockModule } from './lastblock/lastblock.module';
import { CoreModule } from './core/core.module';
import { CompanyReviewController } from './company-review/company-review.controller';
import { AuthenticationController } from './authentication/authentication.controller';
import { AuthenticationService } from './authentication/authentication.service';
import { UsersService } from './users/users.service';
import { Users2Service } from './users2/users2.service';

@Module({
  imports: [CoreModule, GroupModule, IndexModule, LastBlockModule, ConfigModule.forRoot()],
  controllers: [CompanyReviewController, AuthenticationController],
  providers: [AuthenticationService, UsersService, Users2Service],
})
export class AppModule {}
