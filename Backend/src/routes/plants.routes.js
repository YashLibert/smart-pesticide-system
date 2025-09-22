import express from "express";
import multer from "multer";
import { detectDisease } from "../controllers/plants.controllers.js";

const router = express.Router();

// setup multer
const upload = multer({ storage: multer.memoryStorage() });

// route with multer
router.post("/detect-disease", upload.single("image"), detectDisease);

export default router;
