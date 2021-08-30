import { Injectable } from '@nestjs/common';
import { Group } from './interfaces/group.interface';
import {Web3Util} from '../web3/web3';


@Injectable()
export class GroupService {

  async findAll(): Promise<Number[]> {

    let groupIds: Number[] = [];
    //let b = await (new Web3Util()).getBlockNumber()
    let d = await (new Web3Util()).getGroupIds()
    for(let _d of d){
      groupIds.push(_d)
    }
    return groupIds;

  }

  async findOne(groupId:Number): Promise<Group[]>{

    let groups: Group[] = [];
    let c = await (new Web3Util()).getGroup(groupId)
    groups.push({name: c.name, indexes: c.indexes})
    return groups
  }

}