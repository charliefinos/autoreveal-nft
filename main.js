const fs = require("fs");
const uploadToPinataAndSaveHashes = require("./uploader.js");
const addNft = require("./addNft");

// Read current nft name, description and attributes
async function readMetadata(nftId) {
  const file = fs.readFileSync(`./assets/metadata/${nftId}.json`);
  return JSON.parse(file);
}

// return uploaded ipfs hash
async function uploadAsset(path, nftId) {
  const uploadedFile = await uploadToPinataAndSaveHashes(path, nftId);
  return uploadedFile.IpfsHash;
}

// Upload 10 nfts with their own metadata and store them on mongodb
async function main() {
  for (let i = 0; i < 10; i++) {
    const [highResImage, track, image, metadata] = await Promise.all([
      uploadAsset(`./assets/high_res_images/${i}.png`, i),
      uploadAsset(`./assets/tracks/${i}.wav`, i),
      uploadAsset(`./assets/images/${i}.png`, i),
      readMetadata(i),
    ]);

    const res = await addNft(
      image,
      highResImage,
      track,
      i,
      metadata.name,
      metadata.description,
      metadata.attributes
    );
    console.log(res);
    console.log(`NFT ID:${i}`);
  }
}

main();
