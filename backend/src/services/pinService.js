import { generatePin } from "../utils/pinGenerator.js";
import { PIN_EXPIRY_MS } from "../config/constants.js";

const pinStore = new Map();

export function createPin(fileData) {
  const pin = generatePin();

  pinStore.set(pin, {
    ...fileData,
    createdAt: Date.now()
  });

  setTimeout(() => {
    pinStore.delete(pin);
  }, PIN_EXPIRY_MS);

  return pin;
}

export function getPinData(pin) {
  return pinStore.get(pin);
}

export function deletePin(pin) {
  pinStore.delete(pin);
}