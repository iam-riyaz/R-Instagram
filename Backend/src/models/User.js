import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    picturePath: { type: String, default: "" },
    friends: { type: Array, default: [] },
    location: String,
    occupation: String,
    viewedProfile: Number,
    impressions: Number,
  },
  { timestamps: true }
);

export const User = mongoose.model("User", UserSchema);
