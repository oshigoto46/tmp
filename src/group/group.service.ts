import { Injectable } from "@nestjs/common";
import { Group } from "./interfaces/group.interface";
import { Web3Util } from "../web3/web3";

@Injectable()
export class GroupService {
  async findAll(): Promise<Number[]> {
    const groupIds = await new Web3Util().getGroupIds();
    for (let groupId of groupIds) {
      groupIds.push(groupId);
    }
    return groupIds;
  }

  async findOne(groupId: Number): Promise<Group> {
    try {
      let groups: Group;
      let c = await new Web3Util().getGroup(groupId);
      return <Group>{ name: c.name, indexes: c.indexes };
    } catch (e) {
      let tmp: Number[] = [];
      return <Group>{ name: "not_found", indexes: tmp };
    }
  }
}
