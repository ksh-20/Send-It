type Props = {
  progress: number;
};

export default function ProgressBar({ progress }: Props) {
  return (
    <div className="progress">
      <div style={{ width: `${progress}%` }} />
    </div>
  );
}