const pinataSDK = require("@pinata/sdk");
const fs = require("fs");

require("dotenv").config();

async function uploadToPinataAndSaveHashes(path, id) {
  const pinata = new pinataSDK(process.env.API_KEY, process.env.API_SECRET);

  const readableStream = fs.createReadStream(path);

  const options = {
    pinataMetadata: {
      name: id.toString(),
    },
    pinataOptions: {
      cidVersion: 0,
    },
  };

  try {
    const file = await pinata.pinFileToIPFS(readableStream, options);
    return file;
  } catch (err) {
    console.log(err);
  }
}

module.exports = uploadToPinataAndSaveHashes;
