import { useState } from 'react';
import InputBill from './InputBill';
import Output from './Output';
import TipPercentage from './TipPercentage';
import Button from './Button';

function App() {
  const [bill, setBill] = useState<number>(0);
  const [percentage1, setPercentage1] = useState<number>(0);
  const [percentage2, setPercentage2] = useState<number>(0);

  const tip = Number(
    (bill * ((percentage1 + percentage2) / 2 / 100)).toFixed(2),
  );

  function handleReset() {
    setBill(0);
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div className="flex flex-col gap-2 bg-slate-300 p-2">
      <InputBill bill={bill} setBill={setBill} />
      <TipPercentage percentage={percentage1} setPercentage={setPercentage1}>
        How did you like the service
      </TipPercentage>
      <TipPercentage percentage={percentage2} setPercentage={setPercentage2}>
        How did your friend like the service?
      </TipPercentage>
      {bill ? <Output bill={bill} tip={tip} /> : null}
      {bill ? <Button onClick={handleReset} /> : null}
    </div>
  );
}

export default App;
