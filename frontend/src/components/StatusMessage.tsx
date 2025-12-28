export function validatePin(pin: string) {
  return /^\d{4}$/.test(pin);
}

export function validateFile(file: File) {
  return file.size <= 5 * 1024 * 1024;
}