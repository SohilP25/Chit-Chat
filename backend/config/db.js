import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser : true,
            useUnifiedTopology: true
        });
        console.log(`Database Connected: ${connect.connection.host}`);
    } catch (error) {
        console.log(`Error : ${error.message}`);
    }
}
export default connectDB;