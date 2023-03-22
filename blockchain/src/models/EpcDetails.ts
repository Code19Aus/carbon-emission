// external imports
import mongoose from "mongoose";

// epcDetails schema
const EpcDetailsSchema = new mongoose.Schema(
  {
    timestamp: {
      type: Date,
      required: true
    },
    last_hash: {
      type: String,
      required: true,
      unique: true
    },
    hash: {
      type: String,
      required: true,
      unique: true
    },
    data: {
      epc_id: { type: String, unique: false },
      previous_reading_time: { type: Date },
      reading_time: { type: Date },
      count: { type: Number },
      time_between_entry_exit: { type: Number },
      floor_no: { type: String },
      reader_id: { type: String },
      antenna_number: { type: Number },
      ware_house_type: { type: String },
      status: { type: String },
    }
  },
  { timestamps: true }
);

//export the model
const EpcDetails = mongoose.model("EpcDetails", EpcDetailsSchema);
export default EpcDetails;