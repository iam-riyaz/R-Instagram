
import express from "express"
import {login} from "../controller/auth.js"

export const router= express.Router();

router.post("/login", login)
