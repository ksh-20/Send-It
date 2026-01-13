import { useState } from "react";
import Home from "./pages/Home";

export type Mode = "idle" | "sender" | "receiver";

export default function App() {
  const [mode, setMode] = useState<Mode>("idle");

  return <Home mode={mode} setMode={setMode} />;
}