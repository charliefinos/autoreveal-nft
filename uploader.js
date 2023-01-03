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
    const image = await pinata.pinFileToIPFS(readableStream, options);
    console.log(image);
  } catch (err) {
    console.log(err);
  }
}

uploadToPinataAndSaveHashes("sample-files/images/pepe.png", "2");
