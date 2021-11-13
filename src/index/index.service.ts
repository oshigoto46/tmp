import { Injectable } from "@nestjs/common";
import { Index } from "./interfaces/index.interface";
import { Web3Access } from "../web3/web3accessImpl";

@Injectable()
export class IndexService {
  async findOne(indexId: number): Promise<Index> {
    try {
      const index = await new Web3Access().getIndex(indexId);
      console.log("index" + index);

      return <Index>{
        name: index.name,
        ethPriceInWei: index.ethPriceInWei,
        usdPriceInCents: index.usdPriceInCents,
        usdCapitalization: index.usdCapitalization,
        percentageChange: index.percentageChange,
      };
    } catch (e) {
      
      // console.log("===============service======")
      return <Index>{
        name: "not_found",
        ethPriceInWei: 0,
        usdPriceInCents: 0,
        usdCapitalization: 0,
        percentageChange: 0,
      };
    }
  }
}
