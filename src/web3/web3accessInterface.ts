const Web3 = require("web3");
import { Group } from "../group/interfaces/group.interface";
import { Index } from "../index/interfaces/index.interface";
import { Block } from "../lastblock/interfaces/block.interface";

export interface Web3AccessInterface {
  getBlockNumber(): Promise<Block>;
  getGroup(groupId): Promise<Group>;
  getGroupIds(): Promise<Group[]>;
  getIndex(indexId): Promise<Index>;
}
