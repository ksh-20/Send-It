import { useState } from "react";
import PinInput from "../components/PinInput";
import { socket } from "../api/socket";
import { API_BASE } from "../utils/constants";
import { validatePin } from "../utils/validators";

export default function Receiver() {
  const [pin, setPin] = useState("");

  async function connect() {
    if (!validatePin(pin)) {
      alert("Invalid PIN");
      return;
    }

    socket.connect();
    socket.emit("join-room", pin);

    socket.on("file-available", () => {
      window.location.href = `${API_BASE}/file/download/${pin}`;
    });
  }

  return (
    <div>
      <h1>Receive File</h1>
      <PinInput pin={pin} setPin={setPin} onSubmit={connect} />
    </div>
  );
}