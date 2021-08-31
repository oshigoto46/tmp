import { Injectable } from "@nestjs/common";
import { Block } from "./interfaces/block.interface";
import { Web3Util } from "../web3/web3";

@Injectable()
export class LastBlockService {
  async findAll(): Promise<Block> {
    let block = await new Web3Util().getBlockNumber();
    return <Block>block;
  }
}
