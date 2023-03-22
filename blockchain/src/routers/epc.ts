// external imports
import express from 'express';
import createHttpError from 'http-errors';
import moment from 'moment';
const router = express.Router();

// internal imports
import Block from '../blockchain/block';
import { checkLogin } from "../middleWares/common/checkLogin";
import EpcDetails from "../models/EpcDetails";

//CONTROLLERS
import { getEpcListByTimeRange } from '../controllers/epc';

const timeDifferentCount = (now: any, last: any) => {
  return Math.abs(moment(now).diff(last, "seconds"));
};

// Entry EPC Details
router.post("/entry", checkLogin, async (req, res, next) => {
  let { epc, readingTime, readerId, antennaNumber, wareHouseType, floorNo } = req.body;
  try {
    const epc_details = await EpcDetails.findOne().sort({
      createdAt: -1,
    });
    const currentHash = epc_details?.hash;

    const epcDetails = await EpcDetails.findOne({
      "data.epc_id": epc,
    }).sort({ createdAt: -1 });

    const count = epcDetails?.data?.count ? epcDetails.data.count + 1 : 1;
    const data = {
      epc_id: epc,
      previous_reading_time: new Date(
        epcDetails ? epcDetails?.data?.reading_time : readingTime
      ),
      reading_time: new Date(readingTime),
      count,
      time_between_entry_exit: epcDetails
        ? timeDifferentCount(readingTime, epcDetails?.data?.reading_time)
        : 0,
      floor_no: floorNo,
      reader_id: readerId,
      antenna_number: antennaNumber,
      ware_house_type: wareHouseType,
      status: count % 2 === 0 ? "OUT" : "IN",
    };

    const block = Block.mineBlock(currentHash, data);

    const newEpcDetails = new EpcDetails({
      timestamp: block.timestamp,
      last_hash: block.lastHash,
      hash: block.hash,
      data: data,
    });

    await newEpcDetails.save();
    return res.json({
      msg: "EPC ID details imported successfully!!!"
    })
  } catch (error) {
    return next(createHttpError(error.message));
  }
});

// unique epc details
router.get("/unique", checkLogin, async (req, res, next) => {
  try {
    const data = await EpcDetails.aggregate([
      {
        $sort: {
          createdAt: -1,
        },
      },
      {
        $match: {
          data: {
            $exists: true,
          },
        },
      },
      {
        $group: {
          _id: "$data.epc_id",
          epc: {
            $push: "$$ROOT",
          },
        },
      },
      {
        $project: {
          _id: 0,
          data: {
            $first: "$epc",
          },
        },
      },
      {
        $replaceRoot: {
          newRoot: "$data",
        },
      },
      {
        $sort: {
          createdAt: -1,
        },
      },
    ]);

    const modifiedData = data.map((item: any) => {
      const {
        epc_id: epcId,
        previous_reading_time: previousReadingTime,
        reading_time: readingTime,
        count,
        time_between_entry_exit: timeBetweenEntryExit,
        reader_id: readerId,
        floor_no: floorNo,
        antenna_number: antennaNumber,
        ware_house_type: wareHouseType,
        status,
      } = item.data;

      return {
        epcId,
        previousReadingTime: moment(
          previousReadingTime,
          "YYYY/MM/DD HH:mm:ss"
        ).format("YYYY-MM-DD HH:mm:ss"),
        readingTime: moment(readingTime, "YYYY/MM/DD HH:mm:ss").format(
          "YYYY-MM-DD HH:mm:ss"
        ),
        count,
        timeBetweenEntryExit,
        readerId,
        floorNo,
        antennaNumber,
        wareHouseType,
        status,
      };
    });

    return res.json({
      msg: "success",
      data: modifiedData
    });
  } catch (error: any) {
    return next(createHttpError(error.message));
  }
});

// get all  data limit 1000
router.get("/all", checkLogin, async (req, res, next) => {
  try {
    const data = await EpcDetails.find({
      data: { $exists: true },
      limit: 1000,
    }).sort({
      createdAt: -1,
    });

    const modifiedData = data.map((item: any) => {
      const {
        epc_id: epcId,
        previous_reading_time: previousReadingTime,
        reading_time: readingTime,
        count,
        time_between_entry_exit: timeBetweenEntryExit,
        reader_id: readerId,
        floor_no: floorNo,
        antenna_number: antennaNumber,
        ware_house_type: wareHouseType,
        status,
      } = item.data;

      return {
        epcId,
        previousReadingTime: moment(
          previousReadingTime,
          "YYYY/MM/DD HH:mm:ss"
        ).format("YYYY-MM-DD HH:mm:ss"),
        readingTime: moment(readingTime, "YYYY/MM/DD HH:mm:ss").format(
          "YYYY-MM-DD HH:mm:ss"
        ),
        count,
        timeBetweenEntryExit,
        readerId,
        floorNo,
        antennaNumber,
        wareHouseType,
        status,
      };
    });

    return res.json({
      msg: "success",
      data: modifiedData
    });
  } catch (error: any) {
    return next(createHttpError(error.message));
  }
});

// get Time between value
router.get("/timebetween", checkLogin, getEpcListByTimeRange);

// max rfid details
router.get("/max/:id", checkLogin, async (req, res, next) => {
  const epc: any = req.params.id;

  try {
    const data = await EpcDetails.findOne({ "data.epc_id": epc }).sort({
      createdAt: -1,
    });

    if (data && data.data) {
      const {
        epc_id: epcId,
        previous_reading_time: previousReadingTime,
        reading_time: readingTime,
        count,
        time_between_entry_exit: timeBetweenEntryExit,
        reader_id: readerId,
        floor_no: floorNo,
        antenna_number: antennaNumber,
        ware_house_type: wareHouseType,
        status,
      } = data.data;
      const modifiedData = {
        epcId,
        previousReadingTime: moment(
          previousReadingTime,
          "YYYY-MM-DD HH:mm:ss"
        ).format("YYYY-MM-DD HH:mm:ss"),
        readingTime: moment(readingTime, "YYYY-MM-DD HH:mm:ss").format(
          "YYYY-MM-DD HH:mm:ss"
        ),
        count,
        timeBetweenEntryExit,
        floorNo,
        readerId,
        antennaNumber,
        wareHouseType,
        status,
      };
      return next({
        status: 200,
        message: modifiedData,
      });
    } else {
      return next({
        status: 200,
        message: [],
      });
    }
  } catch (error) {
    return next({
      status: 401,
      message: error.message,
    });
  }
});

// single rfid details
router.get("/id/:id", checkLogin, async (req, res, next) => {
  //   console.log("get single hit");
  const epc = req.params.id;

  try {
    const data = await EpcDetails.find({ "data.epc_id": epc }).sort({
      createdAt: -1,
    });

    if (data) {
      const modifiedData = data.map((item: any) => {
        const {
          epc_id: epcId,
          previous_reading_time: previousReadingTime,
          reading_time: readingTime,
          count,
          time_between_entry_exit: timeBetweenEntryExit,
          reader_id: readerId,
          floor_no: floorNo,
          antenna_number: antennaNumber,
          ware_house_type: wareHouseType,
          status,
        } = item.data;

        return {
          epcId,
          previousReadingTime: moment(
            previousReadingTime,
            "YYYY/MM/DD HH:mm:ss"
          ).format("YYYY-MM-DD HH:mm:ss"),
          readingTime: moment(readingTime, "YYYY/MM/DD HH:mm:ss").format(
            "YYYY-MM-DD HH:mm:ss"
          ),
          count,
          timeBetweenEntryExit,
          floorNo,
          readerId,
          antennaNumber,
          wareHouseType,
          status,
        };
      });

      return next({
        status: 200,
        message: modifiedData,
      });
    } else {
      return next({
        status: 200,
        message: [],
      });
    }
  } catch (error) {
    return next({
      status: 401,
      message: error.message,
    });
  }
});

export default router;
