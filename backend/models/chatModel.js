import mongoose from "mongoose";

const chatSchema = mangoose.Schema(
    {
        chatName:{type:String, trim:true},
        isGroupChat : { type:Boolean, default:false},
        users:[
            {
                type : mangoose.Schema.Types.ObjectId,
                ref : "User"
            }
        ],
        latestMessage:{
            type:mangoose.Schema.Types.ObjectId,
            ref:"Message"
        },
        groupAdmin:{
            type:mangoose.Schema.Types.ObjectId,
            ref:"User"
        }
    },
    {
        timeStamps: true
    }
);

const Chat = mongoose.model("Chat",chatSchema);

export default Chat;