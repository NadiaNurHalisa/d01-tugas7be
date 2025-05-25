import express from "express";
import { getcatat, createcatat, updatecatat, deletecatat } from "../controllers/Usercontroller.js";

const router = express.Router();

router.get("/catat", getcatat);
router.post("/add-catat", createcatat);
router.put("/edit-catat/:id", updatecatat);
router.delete("/delete-catat/:id", deletecatat);

export default router;
