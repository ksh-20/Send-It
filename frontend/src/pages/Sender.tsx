import { useState } from "react";
import FileUpload from "../components/FileUpload";
import PinDisplay from "../components/PinDisplay";
import { socket } from "../api/socket";
import { Mode } from "../App";

type Props = {
  setMode: (mode: Mode) => void;
};

export default function Sender({ setMode }: Props) {
  const [pin, setPin] = useState("");

  function handlePin(pin: string) {
    setPin(pin);
    setMode("sender");
    socket.connect();
    socket.emit("join-room", pin);

    socket.emit("file-ready", pin);
  }

  return (
    <div className="card">
      <h1>Send a File</h1>
      <p>Select a file and share the PIN with your friend.</p>

      {!pin ? (
        <FileUpload onPinGenerated={handlePin} />
      ) : (
        <PinDisplay pin={pin} />
      )}
    </div>
  );
}