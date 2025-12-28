import express from "express";
import { upload } from "../config/multer.js";
import { downloadFileController } from "../controllers/fileController.js";

const router = express.Router();

router.post("/upload", upload.single("file"), (req, res) => {
  const { filename, originalname, size, path } = req.file;

  res.json({
    filename,
    originalname,
    size,
    path
  });
});

router.get("/download/:pin", downloadFileController);

export default router;