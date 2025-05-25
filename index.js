import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import Loginroute from "./routes/Loginroute.js";
import Userroute from "./routes/Userroute.js";

const app = express();

dotenv.config();

app.use(cookieParser());
app.use(cors({ credentials: true, origin: true }));
app.use(express.json());
// Hapus view engine dan route `res.render`
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the API" });
});

app.use(Loginroute);
app.use(Userroute);

app.listen(5000, () => console.log("Server connected on port 5000"));
