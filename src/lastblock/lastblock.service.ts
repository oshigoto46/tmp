import { Injectable } from "@nestjs/common";
import { Block } from "./interfaces/block.interface";
import { Web3Access } from "../web3/web3accessImpl";

@Injectable()
export class LastBlockService {
  async findAll(): Promise<Block> {
    let block = await new Web3Access().getBlockNumber();
    return <Block>block;
  }
}
