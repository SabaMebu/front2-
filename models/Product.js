import mongoose, { model, Schema, models } from "mongoose";

const ProductSchema = new Schema(
  {
    title_en: { type: String, required: true },
    title_ge: { type: String, required: true },
    description_en: String,
    description_ge: String,
    price: { type: Number, required: true },
    // images: [{ type: string }],
    category: { type: mongoose.Types.ObjectId, ref: "Category" },
    properties: { type: Object },
  },
  {
    timestamps: true,
  }
);

export const Product = models.Product || model("Product", ProductSchema);
