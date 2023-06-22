import express from "express";
import {registerUser,loginUser,allUsers} from '../controllers/userControllers.js'
import protect from "../middleware/authMiddleware.js";
const userRouter = express.Router();

userRouter
.post("/",registerUser).get("/",protect,allUsers)
.post("/login",loginUser);


export default userRouter;