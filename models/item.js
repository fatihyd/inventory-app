const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
  price: { type: Number, min: 1, required: true },
  numberInStock: { type: Number, required: true },
});

module.exports = mongoose.model("Item", ItemSchema);
