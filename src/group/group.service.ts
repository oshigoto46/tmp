import { Injectable } from "@nestjs/common";
import { Group } from "./interfaces/group.interface";
import { Web3AccessAbstract } from "../web3/web.3access.abstract";

@Injectable()
export class GroupService {
  constructor(private readonly web3: Web3AccessAbstract) {}
  async findAll(): Promise<Group[]> {
    return await this.web3.getGroupIds();
  }

  async findOne(groupId: Number): Promise<Group> {
    try {
      const groups: Group = await this.web3.getGroup(groupId);
      return <Group>{ name: groups.name, indexes: groups.indexes };
    } catch (e) {
      let tmp: Number[] = [];
      return <Group>{ name: "not_found", indexes: tmp };
    }
  }
}
