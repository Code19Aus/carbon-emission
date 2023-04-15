// external imports
import express from 'express';
import moment from 'moment';
const router = express.Router();

// internal imports
const { checkLogin } = require("../middleWares/common/checkLogin");

// import models
const ProductFF = require("../models/ProductFF");

// Entry Product Details
router.post("/addNew", checkLogin, async (req, res, next) => {
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
    totalRoll,
    epcIdList,
    readingTime,
  } = await req.body;

  try {
    const RollDetails = epcIdList.map((epc_id: any, index: any) => {
      return {
        roll_id: productId + "-" + (index + 1),
        epc_id: epc_id,
        reading_time: moment(readingTime).format("YYYY-MM-DD HH:mm:ss"),
      };
    });
    const newProductFF = new ProductFF({
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
      total_roll: totalRoll,
      roll_details: RollDetails,
    });

    const inputProductDetails = await newProductFF.save();

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

// get all product details
router.get("/getAll", checkLogin, async (req, res, next) => {
  try {
    const allProductDetails = await ProductFF.find();
    return next({
      status: 200,
      message: allProductDetails,
    });
  } catch (error) {
    return next({
      status: 400,
      message: error.message,
    });
  }
});

// get roll details by product id
router.get("/getRollDetailsById", checkLogin, async (req, res, next) => {
  const { productId } = req.query;
  try {
    var rollDetails = await ProductFF.find(
      { product_id: productId },
      { roll_details: 1, _id: 0 }
    );

    rollDetails = rollDetails[0].roll_details.map((item: any) => {
      return {
        roll_id: item.roll_id,
        epc_id: item.epc_id,
        reading_time: moment(item.reading_time).format("YYYY-MM-DD HH:mm:ss"),
        status: item.status,
      };
    });

    return next({
      status: 200,
      message: rollDetails,
    });
  } catch (error) {
    return next({
      status: 400,
      message: error.message,
    });
  }
});

// add one/many new roll details by product id and last roll id find
router.post(
  "/addNewRollDetails/id/:productId",
  checkLogin,
  async (req, res, next) => {
    try {
      const lastRollDetails = await ProductFF.find(
        { product_id: req.params.productId },
        { roll_details: 1, _id: 0 }
      );
      const lastRollId =
        lastRollDetails[0].roll_details[
          lastRollDetails[0].roll_details.length - 1
        ].roll_id;

      const lastRollIdNumber = parseInt(lastRollId.split("-")[1]);
      const newRollDetails = req.body.epc_id_list.map((epc_id: any, index: any) => {
        return {
          roll_id: req.params.productId + "-" + (lastRollIdNumber + index + 1),
          epc_id: epc_id,
          reading_time: moment(req.body.readingTime, "YYYY/MM/DD HH:mm:ss"),
        };
      });
      const addNewRollDetails = await ProductFF.updateOne(
        { product_id: req.params.productId },
        { $push: { roll_details: newRollDetails } }
      );
      return next({
        status: 200,
        message: "New roll details added successfully!!!",
      });
    } catch (error) {
      return next({
        status: 400,
        message: error.message,
      });
    }
  }
);

// update roll details status by product id and roll id
router.put("/updateRollDetailsStatus", checkLogin, async (req, res, next) => {
  // get query params
  const { productId, rollId } = req.query;
  try {
    const updateRollDetails = await ProductFF.updateOne(
      {
        product_id: productId,
        "roll_details.roll_id": rollId,
      },
      {
        $set: {
          "roll_details.$.status": req.body.status,
          "roll_details.$.reading_time": req.body.readingTime,
        },
      }
    );
    return next({
      status: 200,
      message: "Roll details updated successfully!!!",
    });
  } catch (error) {
    return next({
      status: 400,
      message: error.message,
    });
  }
});

export default router;