import express from "express";
import dotenv from "dotenv";
import {chats} from "./data/data.js";
import connectDB from "./config/db.js";
import userRouter from "./routes/userRoutes.js"
import { notFound,errorHandler } from "./middleware/errorMiddleware.js";
const PORT = process.env.PORT || 5000;

const app = express();
dotenv.config();
connectDB();

app.use(express.json()); 

app.get("/",(req,res)=>{
     res.send("API is runnning")
})

app.use('/api/user',userRouter);

//Error handling on other routes
app.use(notFound);
app.use(errorHandler);

app.listen(PORT,console.log(`server started on ${PORT}`));