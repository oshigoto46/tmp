import { Module } from "@nestjs/common";
import { GroupController } from "./group.controller";
import { GroupIdsController } from "./groupIds.controller";
import { GroupService } from "./group.service";

@Module({
  controllers: [GroupController, GroupIdsController],
  providers: [GroupService],
})
export class GroupModule {}
