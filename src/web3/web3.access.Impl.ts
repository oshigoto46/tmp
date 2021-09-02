const Web3 = require("web3");
import { Group } from "../group/interfaces/group.interface";
import { Index } from "../index/interfaces/index.interface";
import { Block } from "../lastblock/interfaces/block.interface";
import { Web3AccessAbstract } from "./web.3access.abstract";
import { abiJson } from "./abiJson";
import { Injectable } from "@nestjs/common";

@Injectable()
export class Web3Access extends Web3AccessAbstract {
  private eth;
  private contract;

  constructor() {
    super();
    const apiKey = process.env.APIKEY;
    const provider = new Web3.providers.HttpProvider(
      `https://ropsten.infura.io/v3/${apiKey}`
    );
    this.eth = new Web3(provider).eth;
    const address = process.env.ADDRESS;
    this.contract = new this.eth.Contract(abiJson, address);
  }

  async getBlockNumber(): Promise<Block> {
    return this.eth.getBlockNumber();
  }

  async getGroup(groupId): Promise<Group> {
    return this.contract.methods.getGroup(groupId).call();
  }

  async getGroupIds(): Promise<Group[]> {
    return this.contract.methods.getGroupIds().call();
    // return new Promise<Group[]>(
    //   (resolve, reject) => new Error("not implmented")
    // );
  }

  async getIndex(indexId): Promise<Index> {
    return this.contract.methods.getIndex(indexId).call();
  }
}
