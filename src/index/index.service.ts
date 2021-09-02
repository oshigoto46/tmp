import { Injectable } from "@nestjs/common";
import { Index } from "./interfaces/index.interface";
import { Web3AccessAbstract } from "../web3/web.3access.abstract";
@Injectable()
export class IndexService {
  constructor(private readonly web3: Web3AccessAbstract) {}
  async findOne(indexId: Number): Promise<Index> {
    try {
      const index = await this.web3.getIndex(indexId);
      console.log("index" + index);

      return <Index>{
        name: index.name,
        ethPriceInWei: index.ethPriceInWei,
        usdPriceInCents: index.usdPriceInCents,
        usdCapitalization: index.usdCapitalization,
        percentageChange: index.percentageChange,
      };
    } catch (e) {
      //
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
