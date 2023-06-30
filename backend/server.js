import express from "express";
import path from "path";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRouter from "./routes/userRoutes.js"
import chatRouter from "./routes/chatRoutes.js"
import messageRouter from "./routes/messageRoutes.js"
import { notFound,errorHandler } from "./middleware/errorMiddleware.js";
const PORT = process.env.PORT || 5000;

const app = express();
dotenv.config();
connectDB();

app.use(express.json()); 



app.use('/api/user',userRouter);
app.use('/api/chat',chatRouter);
app.use('/api/message',messageRouter);


// ---------------For Deployment Setup------------------------
const __dirname1 = path.resolve();
if (process.env.NODE_ENV === "production") {
     app.use(express.static(path.join(__dirname1,"/frontend/build")))

     app.get("*",(req,res)=>{
          res.sendFile(path.resolve(__dirname1,"frontend","build","index.html"));
     })
} else {
     app.get("/",(req,res)=>{
          res.send("API is runnning Successfully")
     })
}


//Error handling on other routes
app.use(notFound);
app.use(errorHandler);

const server = app.listen(PORT,console.log(`server started on ${PORT}`));

import {Server} from "socket.io"

const io =  new Server(server,{
     pingTimeout: 60000,
     cors:{
          origin:"http://localhost:3000",
     },
});

io.on("connection",(socket)=>{
     console.log("connected to socket.io");

     socket.on("setup",(userData) =>{
          socket.join(userData._id);
          console.log(userData._id);
          socket.emit("connected")   
     });

     socket.on("join chat",(room) =>{
          socket.join(room);
          console.log("User joined room: " + room ); 
     })

     socket.on("typing",(room) => socket.in(room).emit("typing"));
     socket.on("stop typing",(room) => socket.in(room).emit("stop typing"));

     socket.on("new message",(newMessageReceived)=>{
          var chat = newMessageReceived.chat;

          if (!chat.users) return console.log("chat.users not defined");

          chat.users.forEach(user => {
               
               if (user._id == newMessageReceived.sender._id) return;

               socket.in(user._id).emit("message received",newMessageReceived)
          });
     })

     socket.off("setup",()=>{
          console.log("USER DISCONNECTED");
          socket.leave(userData._id);
     })

})