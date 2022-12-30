const MongoClient = require("mongodb").MongoClient;
const Nft = require("./models/Nft.model");

async function uploadNftMetadata(nftId, metadata) {
  // Connect to MongoDB
  const client = new MongoClient(
    `mongodb+srv://carlos123:${process.env.PASSWORD}@cluster0.6jygryu.mongodb.net/?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  try {
    await client.connect();
    const myNft = new Nft({
      id: 2,
      name: "aa",
      description: "1asdasd",
      image: "www.asdasd.com",
      high_res_image: "www.asd.com",
      animation_url: "asdasdasd",
      attributes: [{ trait_type: "Head", value: "asd" }],
    });
    const nftSave = await myNft.save();
    console.log(nftSave);
  } catch (err) {
    console.log(err);
  }

  console.log(`Inserted document with _id: ${result.insertedId}`);

  // Close the MongoDB connection
  client.close();
}

uploadNftMetadata("0x1234...", "My NFT metadata");
