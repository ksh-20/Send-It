type Props = {
  pin: string;
  setPin: (pin: string) => void;
  onSubmit: () => void;
};

export default function PinInput({ pin, setPin, onSubmit }: Props) {
  return (
    <div>
      <input
        maxLength={4}
        value={pin}
        onChange={(e) => setPin(e.target.value)}
        placeholder="Enter PIN"
      />
      <button onClick={onSubmit}>Connect</button>
    </div>
  );
}