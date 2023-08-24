type BillProps = {
  bill: number;
  setBill: (prev: number) => void;
};

export default function InputBill({ bill, setBill }: BillProps) {
  return (
    <div className="flex gap-2">
      <label htmlFor="bill">How much was the bill?</label>
      <input
        type="number"
        id="bill"
        value={bill}
        onChange={e => setBill(Number(e.target.value))}
        className="border-collapse border-2 border-black"
      />
    </div>
  );
}
