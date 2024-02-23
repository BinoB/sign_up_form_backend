import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from './router/userRoute.js'
import cors from "cors";

dotenv.config();

const app = express();

//Middleware
app.use(express.json());
app.use(cors());

//Router
app.use('/user',userRouter)

const PORT = process.env.PORT;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on PORT ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
