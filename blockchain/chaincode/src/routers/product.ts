// external imports
import express from 'express';
const router = express.Router();

// internal imports
const { checkLogin } = require("../middleWares/common/checkLogin");

// import product ff
const finishFabricRoute = require("./productFF");

router.use("/FF", finishFabricRoute);

// import models
const ProductDetails = require("../models/ProductDetails");

// Entry Product Details
router.post("/addNewProduct", checkLogin, async (req, res, next) => {
  let {
    productId,
    buyerId,
    ral,
    batchNo,
    factory,
    challanNo,
    color,
    quantity,
    gsm,
    dai,
    epc_id_list,
    reading_time,
  } = await req.body;

  try {
    const RollDetails = epc_id_list.map((epc_id: any, index: any) => {
      return {
        roll_id: productId + "-" + (index + 1),
        epc_id: epc_id,
        reading_time: reading_time,
      };
    });
    const newProductDetails = new ProductDetails({
      product_id: productId,
      buyer_id: buyerId,
      ral: ral,
      batch_no: batchNo,
      factory: factory,
      challan_no: challanNo,
      color: color,
      quantity: quantity,
      gsm: gsm,
      dai: dai,
      roll_details: RollDetails,
    });

    const inputProductDetails = await newProductDetails.save();

    return next({
      status: 200,
      message: "Product details imported successfully!!!",
    });
  } catch (error) {
    return next({
      status: 400,
      message: error.message,
    });
  }
});

export default router;
