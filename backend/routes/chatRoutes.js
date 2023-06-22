import express from "express";
import protect from "../middleware/authMiddleware.js";
import { accessChat,fetchChats,createGroupChat,renameGroup,addToGroup,removeFromGroup } from "../controllers/chatControllers.js";

const chatRouter = express.Router();

chatRouter
.post("/",protect,accessChat)
.get("/",protect,fetchChats)
.post("/group",protect,createGroupChat)
.put("/rename",protect,renameGroup)
.put("/groupadd",protect,addToGroup)
.put("/groupremove",protect,removeFromGroup)



export default chatRouter;