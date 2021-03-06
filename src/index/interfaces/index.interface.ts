import { ApiProperty } from "@nestjs/swagger";

export interface Index {
  name: string;
  ethPriceInWei: number;
  usdPriceInCents: number;
  usdCapitalization: number;
  percentageChange: number;
}
