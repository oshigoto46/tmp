export interface Groups {
  name: string;
  //index: Index;
}

interface Index{
  name:              string;
  ethPriceInWei:     number;
  usdPriceInCents:   number;
  usdCapitalization: number;
  percentageChange:  number;
}

// getIndex(1):  Result {
//   '0': 'DeFi Index (1)',
//   '1': '150000000000000000',
//   '2': '9500',
//   '3': '250000000',
//   '4': '-45',
//   name: 'DeFi Index (1)',
//   ethPriceInWei: '150000000000000000',
//   usdPriceInCents: '9500',
//   usdCapitalization: '250000000',
//   percentageChange: '-45'
// }
