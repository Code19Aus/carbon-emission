const fs = require("fs");
const ObjectsToCsv = require("objects-to-csv");
const moment = require("moment");
const { sendEmailWithAttach } = require("./sendEmail");

const exportCSV = () => {
  process.env.RMG_HOURLY_REPORT = "";
  console.log("Trying to generate report!!!");
  try {
    const sql = `SELECT * FROM epc_id_details WHERE reading_time>now()-INTERVAL 9 HOUR; `;
    con.query(sql, async (err, result) => {
      if (err) {
        console.log(err);
      } else {
        result = await result.map((e) => {
          return {
            _id: e._id,
            epc_id: e.epc_id,
            reading_time: moment(e.reading_time, "YYYY-MM-DD HH:mm:ss").format(
              "YYYY-MM-DD HH:mm:ss"
            ),
            antenna_number: e.antenna_number,
            floor: e.antenna_number,
            ware_house_type:
              e.antennaNumber === 1 || e.antennaNumber === 2
                ? "Yarn"
                : "Fabric",
          };
        });

        if (result.length) {
          (async () => {
            const csv = new ObjectsToCsv(result);
            const fileName =
              "rmg_hourly_report_" +
              moment().add(10, "hours").format("YYYY_MM_DD_HH_mm_ss") +
              ".csv";
            await csv.toDisk("./reports/" + fileName);
            process.env.RMG_HOURLY_REPORT = fileName;
            console.log("Report_File_generated");
            sendEmailWithAttach();
          })();
        }
      }
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { exportCSV };
