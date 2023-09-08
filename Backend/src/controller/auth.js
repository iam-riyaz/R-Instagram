import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/User.js";

// REGISTER USER
export const register = async (req, res) => {
    const picturePath=req.file.filename
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      occupation,
      friends,
      location,
    } = req.body;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: passwordHash,
      occupation,
      picturePath,
      friends,
      location,
      viewedProfile: Math.floor(Math.random() * 1000),
      impressions: Math.floor(Math.random() * 10000),
    });

    const savedUser = await newUser.save();
    res.status(201).send({ status: "success", data: savedUser });
  } catch (err) {
    res.status(500).send({ status: "failed", message: err.message });
  }
};

// LOGGING IN
export const login= async (req,res)=>{
    try{

        const {email, password}=req.body

        const user= await User.findOne({email: email})
        
        if(!user){
            return res.status(400).send({message:"user not found"})
        }

        const isPasswordMatch= await bcrypt.compare(password,user.password);
        if(!isPasswordMatch){
            return res.status(400).send({message:"password is incorrect"})
        }
        
        const token= jwt.sign({id:user._id}, process.env.JWT_SECRET)
        delete user.password
        res.status(200).send({token, user})


    }
    catch(err){
        res.status(400).send({message:err.message});
    }
}
