
const Web3 = require('web3');
import { Group } from '../group/interfaces/group.interface';
import { Index } from '../index/interfaces/index.interface';
import { Block } from '../lastblock/interfaces/block.interface';

export class Web3Util{

  private eth;
  private contract;
    
  constructor(){
        const apiKey = process.env.APIKEY;
        const provider = new Web3.providers.HttpProvider(`https://ropsten.infura.io/v3/${apiKey}`);
        this.eth = new Web3(provider).eth;

        const jsonInterface = [{"inputs":[],"payable":false,
            "stateMutability":"nonpayable","type":"constructor"},
            {"constant":true,"inputs":[],"name":"getGroupIds","outputs":
            [{"internalType":"uint256[]","name":"","type":"uint256[]"}],
            "payable":false,"stateMutability":"view","type":"function"},
            {"constant":true,"inputs":[{"internalType":"uint256","name":"_groupId","type":"uint256"}],
            "name":"getGroup","outputs":[{"internalType":"string","name":"name","type":"string"},
            {"internalType":"uint256[]","name":"indexes","type":"uint256[]"}],
            "payable":false,"stateMutability":"view","type":"function"},
            {"constant":true,"inputs":[{"internalType":"uint256","name":"_indexId","type":"uint256"}],
            "name":"getIndex","outputs":[{"internalType":"string","name":"name","type":"string"},
            {"internalType":"uint256","name":"ethPriceInWei","type":"uint256"},
            {"internalType":"uint256","name":"usdPriceInCents","type":"uint256"},
            {"internalType":"uint256","name":"usdCapitalization","type":"uint256"},
            {"internalType":"int256","name":"percentageChange","type":"int256"}],
            "payable":false,"stateMutability":"view","type":"function"}];

        const address = process.env.ADDRESS;

        this.contract = new this.eth.Contract(jsonInterface, address);
    
    }

    async getBlockNumber(): Promise<Block> {
        let blockNum = this.eth.getBlockNumber().then(
         (b) => { return b;}
        );
        return blockNum;
    }
   
    async  getGroup(groupId):Promise<Group>  { 
        return  this.contract.methods.getGroup(groupId).call()
    }

    async getGroupIds() { 
        return this.contract.methods.getGroupIds().call();
     }

    async getIndex(indexId) {
        return this.contract.methods.getIndex(indexId).call(); 
    }
}
