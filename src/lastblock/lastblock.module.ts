import { Module } from "@nestjs/common";
import { LastBlockontroller } from "./lastblock.controller";
import { LastBlockService } from "./lastblock.service";

@Module({
  controllers: [LastBlockontroller],
  providers: [LastBlockService],
})
export class LastBlockModule {}
