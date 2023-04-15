// external imports
import mongoose from "mongoose";

// productDetails schema
const ProductFFSchema = new mongoose.Schema(
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
    total_roll: { type: Number, required: true, unique: false },
    roll_details: [
      {
        roll_id: { type: String, required: true, unique: false },
        epc_id: { type: String, required: true, unique: false },
        reading_time: { type: Date, required: true, unique: false },
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
const ProductFF = mongoose.model("ProductFF", ProductFFSchema);
export default ProductFF;