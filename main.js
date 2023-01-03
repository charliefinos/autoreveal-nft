const fs = require("fs");
const uploadToPinataAndSaveHashes = require("./uploader.js");
const addNft = require("./addNft");
// Upload 10 nfts with their own metadata and store them on mongodb

async function main() {
  for (let i = 0; i < 10; i++) {
    // read all assets, upload and store right metadata
    const highResImage = await uploadToPinataAndSaveHashes(
      `./assets/high_res_images/${i}.png`,
      i
    );
    const track = await uploadToPinataAndSaveHashes(
      `./assets/tracks/${i}.wav`,
      i
    );
    const image = await uploadToPinataAndSaveHashes(
      `./assets/images/${i}.png`,
      i
    );

    // Read current nft name, description and attributes

    const file = fs.readFileSync(`./assets/metadata/${i}.json`);

    const readable = JSON.parse(file);

    const res = await addNft(
      image.IpfsHash,
      highResImage.IpfsHash,
      track.IpfsHash,
      i,
      readable.name,
      readable.description,
      readable.attributes
    );
    console.log(res);
    console.log(`NFT ID:${i}`);
  }
}

main();
