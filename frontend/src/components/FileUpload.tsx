import { useState } from "react";
import { API_BASE } from "../utils/constants";
import { validateFile } from "../utils/validators";

type Props = {
  onPinGenerated: (pin: string) => void;
};

export default function FileUpload({ onPinGenerated }: Props) {
  const [file, setFile] = useState<File | null>(null);

  async function upload() {
    if (!file || !validateFile(file)) {
      alert("Invalid file");
      return;
    }

    const form = new FormData();
    form.append("file", file);

    const uploadRes = await fetch(`${API_BASE}/file/upload`, {
      method: "POST",
      body: form
    });

    const fileData = await uploadRes.json();

    const pinRes = await fetch(`${API_BASE}/pin/generate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fileData)
    });

    const { pin } = await pinRes.json();
    onPinGenerated(pin);
  }

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
      <button onClick={upload}>Upload</button>
    </div>
  );
}