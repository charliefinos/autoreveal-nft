const mongoose = require("mongoose");
const Nft = require("./models/Nft.model");
require("dotenv").config();

async function addNft(
  imageHash,
  highResHash,
  trackHash,
  nftId,
  name,
  description,
  attributes
) {
  const connectionString = `mongodb+srv://carlos123:${process.env.MONGO_PASSWORD}@cluster0.6jygryu.mongodb.net/?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const myNft = new Nft({
      id: nftId,
      name: name,
      description: description,
      image: `https://ipfs.io/ipfs/${imageHash}`,
      highres_image: `https://ipfs.io/ipfs/${highResHash}`,
      animation_url: `https://ipfs.io/ipfs/${trackHash}`,
      external_url: `https://ipfs.io/ipfs/${trackHash}`,
      attributes: attributes,
    });

    const res = await myNft.save();
    mongoose.connection.close();
    console.log("connected", res);
  } catch (e) {
    console.error(e);
  }
}

module.exports = addNft;
