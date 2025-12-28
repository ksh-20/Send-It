import { useState } from "react";
import FileUpload from "../components/FileUpload";
import PinDisplay from "../components/PinDisplay";
import { socket } from "../api/socket";

export default function Sender() {
  const [pin, setPin] = useState("");

  function handlePin(pin: string) {
    setPin(pin);
    socket.connect();
    socket.emit("join-room", pin);
  }

  return (
    <div>
      <h1>Send File</h1>
      {!pin ? <FileUpload onPinGenerated={handlePin} /> : <PinDisplay pin={pin} />}
    </div>
  );
}