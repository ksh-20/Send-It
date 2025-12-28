type Props = {
  pin: string;
};

export default function PinDisplay({ pin }: Props) {
  return (
    <div>
      <h2>Your PIN</h2>
      <h1>{pin}</h1>
    </div>
  );
}