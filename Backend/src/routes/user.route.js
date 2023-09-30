
import express from "express"
import * as userController from "../controller/user.controller.js"
import { verifyToken } from "../middleware/authorization.js";


export const userRouter= express.Router();

// user LOGIN
userRouter.post("/login", userController.login)

// READ
userRouter.get("/:id", verifyToken, userController.getUser)
userRouter.get("/:id/friends", verifyToken, userController.getUserFriends)

// UPDATE
userRouter.patch("/:id/:friendId", verifyToken, userController.addRemoveFriends);


