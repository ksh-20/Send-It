import multer from "multer";
import path from "path";
import fs from "fs";
import { MAX_FILE_SIZE, UPLOAD_DIR } from "./constants.js";

if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (_, __, cb) => cb(null, UPLOAD_DIR),
  filename: (_, file, cb) => {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  }
});

export const upload = multer({
  storage,
  limits: { fileSize: MAX_FILE_SIZE }
});