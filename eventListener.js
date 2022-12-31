const ethers = require("ethers");
const usdtAbi = require("./abi.json");

require("dotenv").config();

const usdtAddress = "0xdAC17F958D2ee523a2206206994597C13D831ec7";

async function usdtListener() {
  const provider = new ethers.providers.WebSocketProvider(
    `wss://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`
  );

  const contract = new ethers.Contract(usdtAddress, usdtAbi, provider);

  contract.on("Transfer", (from, to, value, event) => {
    let info = {
      from: from,
      to: to,
      value: ethers.utils.formatUnits(value, 6),
      data: event,
    };
    console.log(JSON.stringify(info, null, 4));
  });
}

usdtListener();
