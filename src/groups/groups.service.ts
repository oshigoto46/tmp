import { Injectable } from '@nestjs/common';
import { Groups } from './interfaces/groups.interface';
const Web3 = require('web3');
const apiKey = '172567e7cd7c4a29908b56d386b18d38';
const provider = new Web3.providers.HttpProvider(`https://ropsten.infura.io/v3/${apiKey}`);
const web3 = new Web3(provider);


@Injectable()
export class GroupsService {
  private readonly groups: Groups[] = [];

  create(group: Groups) {
    this.groups.push(group);
  }

  async getBlockNumber() {
    let block = web3.eth.getBlockNumber().then(
     (b) => { return b;}
    );
    return block;
  }

  async findAll(): Promise<Groups[]> {
    let b = await this.getBlockNumber()
    this.groups.push({
      age: b,
      breed: 'Bombay',
      name: 'Pixel',
      })
    return this.groups;
  }

  findOne(){
    return this.groups[0]
  }
}
