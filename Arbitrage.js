require("dotenv").config()  
const ethers = require("ethers")
const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL)

const token0 = process.env.token0
const token1 = process.env.token1


