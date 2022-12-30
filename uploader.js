const pinataSDK = require("@pinata/sdk");
const fs = require("fs");

require("dotenv").config();
async function uploadToPinataAndSaveHashes(imagePath) {
  // Set up connection to Pinata
  const pinata = new pinataSDK(process.env.API_KEY, process.env.API_SECRET);

  const readableStream = fs.createReadStream(imagePath);

  const options = {
    pinataMetadata: {
      name: "charlie",
    },
    pinataOptions: {
      cidVersion: 0,
    },
  };

  pinata
    .pinFileToIPFS(readableStream, options)
    .then((result) => {
      //handle results here
      console.log(result);
    })
    .catch((err) => {
      //handle error here
      console.log(err);
    });

  console.log(imageHash);
}

uploadToPinataAndSaveHashes("sample-files/images/pepe.png");
