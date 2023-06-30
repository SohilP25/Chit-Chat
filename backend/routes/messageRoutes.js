import express from "express";
import protect from "../middleware/authMiddleware.js";
import { sendMessage,allMessages} from "../controllers/messageControllers.js";
const messageRouter = express.Router();

messageRouter
.post("/",protect,sendMessage)
.get("/:chatId",protect,allMessages)

export default messageRouter;


 