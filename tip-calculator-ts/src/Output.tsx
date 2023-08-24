type OutputProps = {
  bill: number;
  tip: number;
};

export default function Output({ bill, tip }: OutputProps) {
  return (
    <h2 className="text-2xl">
      You pay ${bill + tip} (${bill} + ${tip} tip)
    </h2>
  );
}
