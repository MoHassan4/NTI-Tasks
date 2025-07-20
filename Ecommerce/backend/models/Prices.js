import mongoose from "mongoose";

const priceSchema = new mongoose.Schema({
  recipe_id: { type: String,
              required: true,
              unique: true },
  price: { type: Number, required: true },
});

export default mongoose.model("prices", priceSchema);
