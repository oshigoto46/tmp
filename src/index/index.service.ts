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

  async findOne(indexId:Number): Promise<Index>{
    try{
       let c = await (new Web3Util()).getIndex(indexId)
       console.log("c"+c)
       
       return <Index>{name:            c.name,
                    ethPriceInWei:   c.ethPriceInWei,
                    usdPriceInCents: c.usdPriceInCents,
                    usdCapitalization: c.usdCapitalization,
                    percentageChange : c.percentageChange
                    }
     }catch(e){
      // 
       // console.log("===============service======")
        return <Index>{name:"not_found",ethPriceInWei:0,usdPriceInCents:0,usdCapitalization:0,percentageChange:0}
    }

  
  }
   
}
