import { Module } from "@nestjs/common";
import { IndexController } from "./index.controller";
import { IndexService } from "./index.service";
import { Web3AccessAbstract } from "src/web3/web.3access.abstract";
import { Web3Access } from "src/web3/web3.access.Impl";

@Module({
  controllers: [IndexController],
  providers: [
    IndexService,
    { provide: Web3AccessAbstract, useClass: Web3Access },
  ],
})
export class IndexModule {}
