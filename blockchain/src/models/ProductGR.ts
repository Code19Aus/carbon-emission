// external imports
import mongoose from "mongoose";

// productDetails schema
const ProductGRSchema = new mongoose.Schema(
  {
    product_id: { type: String, required: true, unique: true },
    buyer_id: { type: String, required: true, unique: false },
    ral: { type: String, required: true, unique: false },
    batch_no: { type: String, required: true, unique: false },
    factory: { type: String, required: true, unique: false },
    challan_no: { type: String, required: true, unique: false },
    color: { type: String, required: true, unique: false },
    quantity: { type: Number, required: true, unique: false },
    gsm: { type: String, required: true, unique: false },
    dai: { type: String, required: true, unique: false },
    roll_details: [
      {
        roll_id: { type: String, required: true, unique: false },
        epc_id: { type: String, required: true, unique: false },
        reading_time: { type: String, required: true, unique: false },
        status: {
          type: String,
          required: true,
          default: "NOT ARRIVED",
          unique: false,
        },
      },
    ],
  },
  { timestamps: true }
);

//export the model
const ProductGR = mongoose.model("ProductGR", ProductGRSchema);
export default ProductGR;