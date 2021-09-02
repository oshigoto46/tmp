import { Injectable } from "@nestjs/common";
import { Block } from "./interfaces/block.interface";
import { Web3AccessAbstract } from "../web3/web.3access.abstract";
@Injectable()
export class LastBlockService {
  constructor(private readonly web3: Web3AccessAbstract) {}
  async findAll(): Promise<Block> {
    let block = await this.web3.getBlockNumber();
    return <Block>block;
  }
}
