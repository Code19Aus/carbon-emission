import EpcDetails from "../models/EpcDetails";
import Block from "../blockchain/block";

export const checkIsDataEmpty = async () => {
  const epcDetails = await EpcDetails.find();
  if (!epcDetails.length) {
    const data = Block.genesis();
    const epcDetails = new EpcDetails({
      timestamp: data.timestamp,
      last_hash: data.lastHash,
      hash: data.hash,
    });
    await epcDetails.save();
    console.log("Data is empty, so created genesis block");
  }
};