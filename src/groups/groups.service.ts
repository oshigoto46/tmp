import { Injectable } from '@nestjs/common';
import { Groups } from './interfaces/groups.interface';
import {Web3Util} from '../web3/web3';


@Injectable()
export class GroupsService {
  private readonly groups: Groups[] = [];

  create(group: Groups) {
    this.groups.push(group);
  }

  async findAll(): Promise<Groups[]> {
    let b = await (new Web3Util()).getBlockNumber()
    let c = await (new Web3Util()).getGroup(12)
    console.log(c.name)

    this.groups.push({
      name: String(c.name)

      })
    return this.groups;
  }

  findOne(){
    return this.groups[0]
  }
}
