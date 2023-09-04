import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/User.js";

// REGISTER USER
export const register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      occupation,
      picturePath,
      friends,
      location,
    } = req.body;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password:passwordHash,
      occupation,
      picturePath,
      friends,
      location,
      viewedProfile:Math.floor(Math.random()*1000),
      impressions:Math.floor(Math.random()*10000)
    });

    const savedUser= await newUser.save()
    res.status(201).send({status:"success",data:savedUser})

  } catch (err) {
    res.status(500).send({ status: "failed",message:err.message})
  }
};
