require('dotenv').config();
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

//MIDDLEWARE
import { errorHandler, notFoundHandler } from './middleWares/common/errorHandler';


//ROUTES
import epcRouter from "./routers/epc";

import { checkIsDataEmpty } from './helper/epc';
// const usersRouter = require("./routers/user");
// const epcRouter = require("./routers/epc");
// const productRouter = require("./routers/product");
// const { checkIsDataEmpty } = require('./helper/epc');


const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());
// request parsers
app.use(express.json());
app.use(express.urlencoded({ extended: false }));




// internal Import
// const {
//   notFoundHandler,
//   errorHandler,
// } = require("./middleWares/common/errorHandler");
// const { exportCSV } = require("./middleWares/common/exportCSV");

// database connection
function main() {
    mongoose.connect(process.env.MONGO_URL || '')
        .then(() => {
            console.log("DB connection successfully!");
            checkIsDataEmpty();
        })
        .catch(err => {
            console.log(err);
        });


    //   await mongoose
    //     .connect(process.env.MONGO_URL|| '', {
    //       useNewUrlParser: true,
    //       useUnifiedTopology: true,
    //     })
    //     .then(() => {
    //       console.log("DB connection successfully!");

    //       checkIsDataEmpty();
    //     });
}



// app.use("/user", usersRouter);
app.use("/epc", epcRouter);
// app.use("/product", productRouter);

// 404 not found handler
app.use(notFoundHandler);

// common error handler
app.use(errorHandler);

app.listen(PORT, () => {
    console.log('app listening to port ' + PORT);
    main();
});
