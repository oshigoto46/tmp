const Web3 = require("web3");
import { Group } from "../group/interfaces/group.interface";
import { Index } from "../index/interfaces/index.interface";
import { Block } from "../lastblock/interfaces/block.interface";
import { Web3AccessInterface } from "./web3accessInterface";
import { abiJson } from "./abiJson";
import { Injectable } from "@nestjs/common";

@Injectable()
export class Web3Access implements Web3AccessInterface {
  private eth;
  private contract;
  
  constructor() {
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
  }

  async getIndex(indexId): Promise<Index> {
    return this.contract.methods.getIndex(indexId).call();
  }
}
