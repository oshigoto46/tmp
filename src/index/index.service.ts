import { Injectable } from '@nestjs/common';
import { Index } from './interfaces/index.interface'
import {Web3Util} from '../web3/web3';


@Injectable()
export class IndexService {


  async findAll(): Promise<Number[]> {
    
    let groupIds: Number[] = [];
    //let b = await (new Web3Util()).getBlockNumber()
    let d = await (new Web3Util()).getGroupIds()
    for(let _d of d){
      groupIds.push(_d)
    }
    return groupIds;

  }

  async findOne(indexId:Number): Promise<Index[]>{

    let index: Index[] = [];
    let c = await (new Web3Util()).getIndex(indexId)
    console.log(c)
    index.push( {name:            c.name,
                 ethPriceInWei:   c.ethPriceInWei,
                 usdPriceInCents: c.usdPriceInCents,
                 usdCapitalization: c.usdCapitalization,
                 percentageChange : c.percentageChange
                 })
    return index
  }

}
