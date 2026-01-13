import Sender from "./Sender";
import Receiver from "./Receiver";
import { Mode } from "../App";

type Props = {
  mode: Mode;
  setMode: (mode: Mode) => void;
};

export default function Home({ mode, setMode }: Props) {
  return (
    <div className="container">
      {(mode === "idle" || mode === "sender") && (
        <Sender setMode={setMode} />
      )}

      {(mode === "idle" || mode === "receiver") && (
        <Receiver setMode={setMode} />
      )}

      <button onClick={() => window.location.reload()} className="reset-btn">
        Start New Transfer
      </button>

    </div>
  );
}