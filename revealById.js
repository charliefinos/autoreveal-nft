const mongoose = require("mongoose");
const Nft = require("./models/Nft.model");
require("dotenv").config();

// Find Nft by id and reveal
// This should be triggered by a lambda function that listen contract minting

async function revealById(id) {
  const connectionString = `mongodb+srv://carlos123:${process.env.MONGO_PASSWORD}@cluster0.6jygryu.mongodb.net/?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const filter = { id: id };
    const reveal = { revealed: true };

    const nft = await Nft.findOneAndUpdate(filter, reveal);

    console.log(nft);
    mongoose.connection.close();
  } catch (e) {
    console.error(e);
  }
}

revealById(2);
