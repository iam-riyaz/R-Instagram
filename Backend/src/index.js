
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from "dotenv"
import multer from 'multer';
import helmet from "helmet"
import morgan from "morgan"
import path from 'path';


import { fileURLToPath } from 'url';
import { connectDB } from './db/db.js';
import {register} from "./controller/user.controller.js"
import {userRouter} from "./routes/user.route.js"

// configuration------
const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
dotenv.config();
const app= express();
app.use(express.json({limit:"30mb", extended:true}))
app.use(express.urlencoded({limit:"30mb",extended:true}))
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}))
// app.use(morgan("common"))
app.use(cors())
app.use("/assets", express.static(path.join(__dirname,"public/assets")));

// FILE STORAGE --------------------------------
const storage= multer.diskStorage({
    destination:function(req,file, cd){
        cd(null, "./public/assets");
    },
    filename:function(req, file,cd){
        cd(null, Date.now()+ file.originalname);
    }
});

 export const upload=multer({storage})

app.get("/", async(req,res)=>{
    console.log("Uploading")
    res.status(200).send("route is working")
})

// ROUTES WITH FILE------------   
app.post("/users/register", upload.single("picturePath"), register)


// ROUTES for USER
app.use("/users", userRouter)



const PORT = process.env.PORT || 2001

connectDB().then(()=>{

    app.listen( PORT, ()=>{
        console.log(`server is listening on port ${PORT}`)
    })
})