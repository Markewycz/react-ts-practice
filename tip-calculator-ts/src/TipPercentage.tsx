type TipProps = {
  children: string;
  percentage: number;
  setPercentage: (prev: number) => void;
};

export default function TipPercentage({
  children,
  percentage,
  setPercentage,
}: TipProps) {
  return (
    <div className="flex gap-2">
      <label>{children}</label>
      <select
        title="Level of satisfaction"
        value={percentage}
        onChange={e => setPercentage(Number(e.target.value))}
        className="border-collapse border-2 border-black"
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was ok (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}
