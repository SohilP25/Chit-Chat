import express from "express";
import dotenv from "dotenv";
import {chats} from "./data/data.js";
const PORT = process.env.PORT || 5000;

const app = express();
dotenv.config();


app.get("/",(req,res)=>{
     res.send("API is runnning")
})

app.get("/api/chat",(req,res)=>{
    res.send(chats)
})


app.get("/api/chat/:id",(req,res)=>{
     const id = req.params.id;
     const singleChat = chats.find((c)=> c._id === id);
     res.send(singleChat);
})


app.listen(PORT,console.log(`server started on ${PORT}`));