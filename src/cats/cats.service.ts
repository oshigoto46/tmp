import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
const Web3 = require('web3');
const apiKey = '172567e7cd7c4a29908b56d386b18d38';
const provider = new Web3.providers.HttpProvider(`https://ropsten.infura.io/v3/${apiKey}`);
const web3 = new Web3(provider);


@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  async getBlockNumber() {
    let block = web3.eth.getBlockNumber().then(
     (b) => { return b;}
    );
    return block;
  }

  async findAll(): Promise<Cat[]> {
    let b = await this.getBlockNumber()
    this.cats.push({
      age: b,
      breed: 'Bombay',
      name: 'Pixel',
      })
    return this.cats;
  }

  findOne(){
    return this.cats[0]
  }
}
