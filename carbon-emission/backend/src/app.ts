require('dotenv').config();
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
import envOrDefault from './utils/envOrDefault';


//MIDDLEWARE
import { errorHandler, notFoundHandler } from './middlewares/common/errorHandler';

//ROUTES
import userRouter from './routes/user.route';
// import assetRouter from './routes/asset.route';
import productRouter from './routes/product.route';


const PORT = envOrDefault('PORT', '8080');
const app = express();

app.use(cors());
app.use(morgan('dev'));
// request parsers
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use("/user", userRouter);
// app.use("/asset", assetRouter);
app.use("/product", productRouter);

// 404 not found handler
app.use(notFoundHandler);

// common error handler
app.use(errorHandler);

app.listen(PORT, () => {
    console.log('app listening to port ' + PORT);
    main();
});


function main() {
    mongoose.connect(envOrDefault('MONGO_URL', ''))
        .then(() => {
            console.log("DB connection successfully!");
        })
        .catch(err => {
            console.log(err);
        });
}