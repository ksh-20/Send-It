import fs from "fs";
import path from "path";
import { PIN_EXPIRY_MS, UPLOAD_DIR } from "../config/constants.js";
import { getPinData, deletePin } from "../services/pinService.js";

export function cleanupExpiredSessions() {
  const now = Date.now();

  fs.readdirSync(UPLOAD_DIR).forEach((file) => {
    const filePath = path.join(UPLOAD_DIR, file);

    try {
      const stats = fs.statSync(filePath);

      if (now - stats.mtimeMs > PIN_EXPIRY_MS) {
        fs.unlinkSync(filePath);
      }
    } catch {
      // ignore failed deletes
    }
  });
}

export function cleanupPin(pin) {
  const data = getPinData(pin);

  if (!data) return;

  try {
    if (data.path && fs.existsSync(data.path)) {
      fs.unlinkSync(data.path);
    }
  } catch {
    // ignore
  }

  deletePin(pin);
}