const { Schema, model } = require("mongoose");

const nftSchema = new Schema({
  id: {
    type: Number,
    unique: true,
  },
  name: String,
  description: String,
  image: { type: String, required: true },
  high_res_image: { type: String, required: true },
  animation_url: { type: String, required: true },
  attributes: [{ trait_type: String, value: String }],
  revealed: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const Nft = model("Nft", nftSchema);

module.exports = Nft;
