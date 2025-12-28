type Props = {
  pin: string;
  setPin: (pin: string) => void;
  onSubmit: () => void;
};

export default function PinInput({ pin, setPin, onSubmit }: Props) {
  return (
    <>
      <input
        type="text"
        maxLength={4}
        value={pin}
        onChange={(e) => setPin(e.target.value)}
        placeholder="4-digit PIN"
      />
      <button onClick={onSubmit}>Connect</button>
    </>
  );
}