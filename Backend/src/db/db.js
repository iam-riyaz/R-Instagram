import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

const MONGO_URI= process.env.MONGO_URI || ""

export const connectDB= async ()=>{
    try{
        const connection= await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`mongodb connection: ${connection.connection.host}`)
    }
    catch(err){
        console.log("mongodb connection error")
        process.exit()
    }
}