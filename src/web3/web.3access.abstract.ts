const Web3 = require("web3");
import { Group } from "../group/interfaces/group.interface";
import { Index } from "../index/interfaces/index.interface";
import { Block } from "../lastblock/interfaces/block.interface";

export abstract class Web3AccessAbstract {
  getBlockNumber(): Promise<Block> {
    return new Promise<Block>((resolve, reject) => new Error("not implmented"));
  }
  getGroup(groupId): Promise<Group> {
    return new Promise<Group>((resolve, reject) => new Error("not implmented"));
  }
  getGroupIds(): Promise<Group[]> {
    return new Promise<Group[]>(
      (resolve, reject) => new Error("not implmented")
    );
  }
  getIndex(indexId): Promise<Index> {
    return new Promise<Index>((resolve, reject) => new Error("not implmented"));
  }
}
