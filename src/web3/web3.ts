
const Web3 = require('web3');



export class Web3Util{

  private eth;
  private contract;
    
  constructor(){
        const apiKey = '172567e7cd7c4a29908b56d386b18d38';
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

        const address = '0x4f7f1380239450AAD5af611DB3c3c1bb51049c29';

        this.contract = new this.eth.Contract(jsonInterface, address);
    
    }

    async getBlockNumber(): Promise<any> {
        let blockNum = this.eth.getBlockNumber().then(
         (b) => { return b;}
        );
        return blockNum;
    }
   
    async  getGroup(groupId) { 
        return  this.contract.methods.getGroup(groupId).call()
    }

    async getGroupIds() { 
        return this.contract.methods.getGroupIds().call();
     }
}
