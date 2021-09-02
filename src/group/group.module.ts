import { Module } from "@nestjs/common";
import { GroupController } from "./group.controller";
import { GroupIdsController } from "./groupIds.controller";
import { GroupService } from "./group.service";
import { Web3AccessAbstract } from "src/web3/web.3access.abstract";
import { Web3Access } from "src/web3/web3.access.Impl";

@Module({
  controllers: [GroupController, GroupIdsController],
  providers: [
    GroupService,
    { provide: Web3AccessAbstract, useClass: Web3Access },
  ],
})
export class GroupModule {}
