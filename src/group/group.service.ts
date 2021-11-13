import { Injectable } from "@nestjs/common";
import { Group } from "./interfaces/group.interface";
import { Web3Access } from "../web3/web3accessImpl";

@Injectable()
export class GroupService {
  async findAll(): Promise<Group[]> {
    return await new Web3Access().getGroupIds();
  }

  async findOne(groupId: number): Promise<Group> {
    try {
      const groups: Group = await new Web3Access().getGroup(groupId);
      return <Group>{name: groups.name, indexes: groups.indexes };
    } catch (e) {
      const tmp: number[] = [];
      return <Group>{ name: "not_found", indexes: tmp };
    }
  }
}
