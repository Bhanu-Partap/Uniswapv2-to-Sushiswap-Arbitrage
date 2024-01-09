require("dotenv").config();
const ethers = require("ethers");

const {RPC_URL, TOKEN0, TOKEN1, UNIROUTERADDRESS, SUSHIROUTERADDRESS} = process.env;
const provider = new ethers.providers.JsonRpcProvider(RPC_URL);

const token0 = TOKEN0;
const token1 = TOKEN1;
// console.log(token0);
// console.log(token1);

const uniRouterAddress = UNIROUTERADDRESS;
const sushiRouterAddress = SUSHIROUTERADDRESS;
const PATH = [token0, token1];
// console.log(PATH);

const routerAbi = [
  'function getAmountsOut(uint amountIn, address[] memory path) public view returns (uint[] memory amounts)',
];

const uniContract = new ethers.Contract(uniRouterAddress, routerAbi, provider);
const sushiContract = new ethers.Contract(sushiRouterAddress,routerAbi, provider);
// console.log(uniContract);
// console.log(sushiContract);

const amountIn = ethers.utils.parseEther("1");

const priceLogic = async () => {
  const uniAmount = await uniContract.getAmountsOut(amountIn, PATH);
  const sushiAmount = await sushiContract.getAmountsOut(amountIn, PATH);

  const uniPrice =  Number(uniAmount[1])/ Number(uniAmount[0]);
  const sushiPrice =  Number(sushiAmount[1])/ Number(sushiAmount[0]);
  console.log("uniPrice",uniPrice);
  console.log("sushiPrice",sushiPrice);
};

priceLogic()
