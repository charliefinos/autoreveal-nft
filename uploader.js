const pinataSDK = require("@pinata/sdk");
const fs = require("fs");

require("dotenv").config();
async function uploadToPinataAndSaveHashes(imagePath) {
  // Set up connection to Pinata
  const pinata = new pinataSDK(
    "614e8595c5808282db15",
    "e1c942e5a97b6a1dc6510d1d23445afbd5ed923ba33ac082bc8d8676c5fa7484"
  );

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
