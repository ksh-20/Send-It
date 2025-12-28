type Props = {
  pin: string;
};

export default function PinDisplay({ pin }: Props) {
  return (
    <div className="pin-box">
      <p>Share this PIN</p>
      <div className="pin">{pin}</div>
    </div>
  );
}