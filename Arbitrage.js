require("dotenv").config();
const ethers = require("ethers");
const [RPC_URL, TOKEN0, TOKEN1, UNIROUTERADDRESS, SUSHIROUTERADDRESS] =
  proces.env;
const provider = new ethers.providers.JsonRpcProvider(RPC_URL);

const token0 = TOKEN0;
const token1 = TOKEN1;

const uniRouterAddress = UNIROUTERADDRESS;
const sushiRouterAddress = SUSHIROUTERADDRESS;
