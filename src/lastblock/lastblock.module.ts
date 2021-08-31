import { Module } from "@nestjs/common";
import { LastBlockController } from "./lastblock.controller";
import { LastBlockService } from "./lastblock.service";

@Module({
  controllers: [LastBlockController],
  providers: [LastBlockService],
})
export class LastBlockModule {}
