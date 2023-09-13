import express from "express"
import { verifyToken } from '../middleware/authorization.js';
import * as postsController from "../controller/posts.controller.js"

export const postsRouter= express.Router();



// READ
postsRouter.get("/",verifyToken, postsController.getFeedPosts)
postsRouter.get("/:userId/", verifyToken, postsController.getUserPosts)


// UPDATE
postsRouter.patch("/:id/like",verifyToken, postsController.likePost)