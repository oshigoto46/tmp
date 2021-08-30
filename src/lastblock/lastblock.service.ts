import { Injectable } from '@nestjs/common';
import { Block } from './interfaces/block.interface'
import {Web3Util} from '../web3/web3';


@Injectable()
export class LastBlockservice {


  async findAll(): Promise<Block[]> {
    
    let block: Block[] = [];
    let b = await (new Web3Util()).getBlockNumber()
    block.push(b)

    return block;

  }


}
