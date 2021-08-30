import { Injectable } from '@nestjs/common';
import { Groups } from './interfaces/groups.interface';
import {Web3Util} from '../web3/web3';


@Injectable()
export class GroupsService {


  async findAll(): Promise<Number[]> {
    
    let groupIds: Number[] = [];
    //let b = await (new Web3Util()).getBlockNumber()
    let d = await (new Web3Util()).getGroupIds()
    for(let _d of d){
      groupIds.push(_d)
    }
    return groupIds;

  }

  async findOne(groupId:Number): Promise<Groups[]>{

    let groups: Groups[] = [];
    let c = await (new Web3Util()).getGroup(groupId)
    groups.push({name: c.name, indexes: c.indexes})
    return groups
  }

}
