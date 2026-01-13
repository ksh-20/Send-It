import { useState } from "react";
import PinInput from "../components/PinInput";
import { socket } from "../api/socket";
import { API_BASE } from "../utils/constants";
import { validatePin } from "../utils/validators";
import { Mode } from "../App";

type Props = {
  setMode: (mode: Mode) => void;
};

export default function Receiver({ setMode }: Props) {
  const [pin, setPin] = useState("");

  async function connect() {
    if (!validatePin(pin)) {
      alert("Invalid Pin");
      return;
    }

    setMode("receiver");
    socket.connect();
    socket.emit("join-room", pin);

    const res = await fetch(`${API_BASE}/pin/validate/${pin}`);
    if (res.ok) {
      window.location.href = `${API_BASE}/file/download/${pin}`;
    }
  }

  return (
    <div className="card">
      <h1>Receive a File</h1>
      <p>Enter the PIN shared by the sender.</p>
      <PinInput pin={pin} setPin={setPin} onSubmit={connect} />
    </div>
  );
}