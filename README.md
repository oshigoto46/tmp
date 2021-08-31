# pragma test

## prerequisites

- node.js for `v14.17.5`
- web3 for `1.5.2 `(see package.json)
## preparation

```
cp .env.sample .env
```

set `.env` file `APIKEY` for ropsten and prepared smartcontract `ADDRESS`

## start

  ```
  npm run start 
  ```
Then you can see http://localhost:3000/api api usage with swagger

![image](https://user-images.githubusercontent.com/50700020/131402788-acdd6433-c9a7-4c35-9d8a-2c1d5b2221ae.png)

Ex1. http://localhost:3000/index/1 returns `{"data":{"name":"DeFi Index (1)","ethPriceInWei":"150000000000000000","usdPriceInCents":"9500","usdCapitalization":"250000000","percentageChange":"-45"}}`

Ex2. http://localhost:3000/group/12 returns `{"data":{"name":"DeFi Indexes","indexes":["0","1","2","3","4","5","6"]}}`

## test
  ```npm run test```
  
- #1-#4 cases are implmented currently
