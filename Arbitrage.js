require("dotenv").config();
const ethers = require("ethers");
const [RPC_URL, TOKEN0, TOKEN1, UNIROUTERADDRESS, SUSHIROUTERADDRESS] =
  proces.env;
const provider = new ethers.providers.JsonRpcProvider(RPC_URL);

const token0 = TOKEN0;
const token1 = TOKEN1;

const uniRouterAddress = UNIROUTERADDRESS;
const sushiRouterAddress = SUSHIROUTERADDRESS;
const PATH = [token0, token1];

const routerAbi = [
  "function getAmountsOut(uint amountIn, address[] memory path) public view returns (uint[] memory amounts);",
];

const uniRouter = new ethers.Contract(uniRouterAddress, routerAbi, provider);
const sushiRouter = new ethers.Contract(sushiRouterAddress,routerAbi,provider);
