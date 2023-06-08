import mongoose from "mongoose";

const messageSchema = mangoose.Schema(
    {
     sender :{type:mangoose.Schema.Types.ObjectId,ref:"User"},
     content : { type: String, 
        trim : true}  ,
     chat :{type:mangoose.Schema.Types.ObjectId,ref:"Chat"}  
    },
    {
        timeStamps: true
    }
);

const Message = mongoose.model("Message",messageSchema);

export default Message;