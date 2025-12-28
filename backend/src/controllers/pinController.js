import { createPin, getPinData } from "../services/pinService.js";

export function generatePinController(req, res) {
  const { filename, originalname, size } = req.body;

  const pin = createPin({ filename, originalname, size });

  res.json({ pin });
}

export function validatePinController(req, res) {
  const { pin } = req.params;
  const data = getPinData(pin);

  if (!data) {
    return res.status(404).json({ message: "Invalid or expired PIN" });
  }

  res.json({ valid: true, file: data });
}