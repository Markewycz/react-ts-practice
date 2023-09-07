// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`
// ^[1-9]\d*(\.\d+)?$

import { useEffect, useRef, useState } from 'react';

export default function App() {
  const [input, setInput] = useState('100');
  const [output, setOutput] = useState('');
  const [curFrom, setCurFrom] = useState('USD');
  const [curTo, setCurTo] = useState('EUR');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(
    function () {
      async function convertCurrency() {
        try {
          setIsLoading(true);
          setError('');

          if (curFrom === curTo || input === '') return setOutput(input);

          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${input}&from=${curFrom}&to=${curTo}`
          );

          if (!res.ok)
            throw new Error('Something went wrong, please try again.');

          const data = await res.json();

          setOutput(data.rates[curTo]);
        } catch (err) {
          console.log(err.message);
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      convertCurrency();
    },
    [input, curTo, curFrom]
  );

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        disabled={isLoading}
      />
      <select
        value={curFrom}
        onChange={e => setCurFrom(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={curTo}
        onChange={e => setCurTo(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>
        {isLoading && 'Loading...'}
        {!isLoading && !error && (
          <>
            {output}&nbsp;
            {curTo}
          </>
        )}
        {error && error}
      </p>
    </div>
  );
}
