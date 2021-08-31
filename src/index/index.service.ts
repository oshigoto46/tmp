import { Injectable } from "@nestjs/common";
import { Index } from "./interfaces/index.interface";
import { Web3Util } from "../web3/web3";

@Injectable()
export class IndexService {
  async findAll(): Promise<Number[]> {
    const groupIds: Number[] = await new Web3Util().getGroupIds();
    for (let groupId of groupIds) {
      groupIds.push(groupId);
    }
    return groupIds;
  }

  async findOne(indexId: Number): Promise<Index> {
    try {
      const index = await new Web3Util().getIndex(indexId);
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
