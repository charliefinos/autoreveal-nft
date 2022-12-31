const mongoose = require("mongoose");
const Nft = require("./models/Nft.model");
require("dotenv").config();

async function uploadNftMetadata() {
  //   const client = new MongoClient(
  //     `mongodb+srv://carlos123:${process.env.MONGO_PASSWORD}@cluster0.6jygryu.mongodb.net/?retryWrites=true&w=majority`,
  //     { useNewUrlParser: true, useUnifiedTopology: true }
  //   );

  const connectionString = `mongodb+srv://carlos123:${process.env.MONGO_PASSWORD}@cluster0.6jygryu.mongodb.net/?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const myNft = new Nft({
      id: 2,
      name: "aa",
      description: "1asdasd",
      image: "www.asdasd.com",
      high_res_image: "www.asd.com",
      animation_url: "asdasdasd",
      attributes: [{ trait_type: "Head", value: "asd" }],
    });

    const res = await myNft.save();
    mongoose.close();
    console.log("connected", res);
  } catch (e) {
    console.error(e);
  }

  //   try {
  //     await client.connect();
  //     const myNft = Nft.create({
  //       id: 2,
  //       name: "aa",
  //       description: "1asdasd",
  //       image: "www.asdasd.com",
  //       high_res_image: "www.asd.com",
  //       animation_url: "asdasdasd",
  //       attributes: [{ trait_type: "Head", value: "asd" }],
  //     });
  //     return myNft;
  //     console.log(nftSave);
  //   } catch (err) {
  //     console.log(err);
  //   }
}

uploadNftMetadata();
