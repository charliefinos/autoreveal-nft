const mongoose = require("mongoose");
const Nft = require("./models/Nft.model");

// Replace <MONGODB_URI> with your MongoDB connection string
mongoose.connect("<MONGODB_URI>", { useNewUrlParser: true });

// The Lambda function
exports.handler = async (event) => {
  // Get the NFT ID from the event payload
  const { nftId } = event.pathParameters;

  // Query the database for the NFT
  const nft = await Nft.findOne({ nftId });

  // Return the NFT, or a 404 error if not found
  if (nft) {
    return {
      statusCode: 200,
      body: JSON.stringify(nft),
    };
  } else {
    return {
      statusCode: 404,
      body: "NFT not found",
    };
  }
};
