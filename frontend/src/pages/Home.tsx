import Sender from "./Sender";
import Receiver from "./Receiver";

export default function Home() {
  return (
    <div className="container">
      <Sender />
      <Receiver />
    </div>
  );
}