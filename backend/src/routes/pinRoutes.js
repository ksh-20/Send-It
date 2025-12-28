import express from "express";
import { generatePinController, validatePinController } from "../controllers/pinController.js";
import { pinRateLimiter } from "../config/rateLimit.js";

const router = express.Router();

router.post("/generate", pinRateLimiter, generatePinController);
router.get("/validate/:pin", pinRateLimiter, validatePinController);

export default router;