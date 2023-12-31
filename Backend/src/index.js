import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";

import { fileURLToPath } from "url";
import { connectDB } from "./config/db.js";
import { register } from "./controller/user.controller.js";
import { userRouter } from "./routes/user.route.js";
import { verifyToken } from "./middleware/authorization.js";
import { postsRouter } from "./routes/posts.route.js";
import { createPost } from "./controller/posts.controller.js";

// configuration------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));
app.use(express.static("public"));

// FILE STORAGE --------------------------------
const storage = multer.diskStorage({
  destination: function (req, file, cd) {
    cd(null, "./public/assets");
  },
  filename: function (req, file, cd) {
    cd(null, file.originalname);
  },
});

const upload = multer({ storage: multer.memoryStorage() });

app.get("/", async (req, res) => {
  console.log("Uploading");
  res.status(200).send("route is working");
});

// ROUTES WITH FILE------------
app.post("/register", upload.single("picture"), register);

app.post("/posts/create", verifyToken, upload.single("picture"), createPost);

// ROUTES for USER
app.use("/users", userRouter);

// ROUTE of POST
app.use("/posts", postsRouter);

const PORT = process.env.PORT || 2001;

// this will make deployed server in running stage updated in every 5 MINUTES
setInterval(()=>{
  console.log("server updated")
},1000*60*5)

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);

    //    ONE TIME DATA INSERT
    // User.insertMany(users)
    // Post.insertMany(posts)
  });
});
