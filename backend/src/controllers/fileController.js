import path from "path";
import { getPinData, deletePin } from "../services/pinService.js";
import { deleteFile } from "../services/fileService.js";

export function downloadFileController(req, res) {
  const { pin } = req.params;
  const data = getPinData(pin);

  if (!data || !data.path) {
    return res.status(404).json({ message: "File not found or expired" });
  }

  const filePath = path.resolve(data.path);

  res.download(filePath, data.originalname, () => {
    deleteFile(filePath);
    deletePin(pin);
  });
}