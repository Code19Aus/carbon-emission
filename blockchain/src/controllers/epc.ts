import { Request, Response, NextFunction } from "express";
import createHttpError from "http-errors";
import moment from "moment";
import EpcDetails from "../models/EpcDetails";

export const getEpcListByTimeRange = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const startTime: Date = new Date(req.query.startTime + '');
        const endTime: Date = new Date(req.query.endTime + '');

        const epc_list = await EpcDetails.aggregate([
            {
                '$match': {
                    'data': {
                        '$exists': true
                    },
                    '$and': [
                        {
                            'data.reading_time': {
                                '$gte': startTime
                            }
                        }, {
                            'data.reading_time': {
                                '$lte': endTime
                            }
                        }
                    ]
                }
            }, {
                '$group': {
                    '_id': {
                        '$dateToString': {
                            'format': '%Y-%m-%dT%H:00:00.000+00:00',
                            'date': '$data.reading_time'
                        }
                    },
                    'count': {
                        '$sum': 1
                    }
                }
            }, {
                '$addFields': {
                    'time': '$_id'
                }
            }, {
                '$project': {
                    '_id': false
                }
            }, {
                '$sort': {
                    'time': 1
                }
            }
        ]);

        let start_hour = new Date(startTime);
        const end_hour = new Date(endTime);
        start_hour.setMinutes(0);
        start_hour.setSeconds(0);

        const data: { date: Date, count: number }[] = [];
        while (start_hour <= end_hour) {
            const items = epc_list.find(epc => (moment(epc.time).isSame(start_hour)));
            data.push({
                date: new Date(start_hour),
                count: items?.count || 0
            });
            start_hour.setHours(start_hour.getHours() + 1);
        }

        return res.json({
            msg: "success",
            data
        });
    } catch (error: any) {
        return next(createHttpError(error.message));
    }
};