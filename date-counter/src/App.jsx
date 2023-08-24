import { useState } from 'react';

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date('august 21 2023');
  date.setDate(date.getDate() + count);

  return (
    <div className="m-10 flex flex flex-col items-center justify-center gap-4">
      <div className="flex items-center gap-2">
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={e => setStep(Number(e.target.value))}
        />
        <span>Step: {step}</span>
      </div>
      <div className="flex items-center gap-2">
        <button
          className="border-2 bg-gray-200 p-2 text-2xl"
          onClick={() => setCount(c => c - step)}
        >
          -
        </button>
        <input
          type="text"
          className="border-2 p-2 text-2xl outline-2"
          value={count}
          onChange={e => setCount(Number(e.target.value))}
        />
        <button
          className="border-2 bg-gray-200 p-2 text-2xl"
          onClick={() => setCount(c => c + step)}
        >
          +
        </button>
      </div>

      <p>
        {count === 0
          ? 'Today is'
          : count > 0
          ? `${count} days from today is`
          : `${Math.abs(count)} days ago was`}
        &nbsp;{date.toDateString()}
      </p>
      {count || step > 1 ? (
        <div>
          <button
            className="border-2 bg-gray-200 p-2 text-lg"
            onClick={() => {
              setCount(0);
              setStep(0);
            }}
          >
            Reset
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default App;
