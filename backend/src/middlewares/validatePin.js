import { getPinData } from "../services/pinService.js";

export function validatePin(req, res, next) {
  const { pin } = req.params;

  if (!getPinData(pin)) {
    return res.status(404).json({ message: "Invalid PIN" });
  }

  next();
}