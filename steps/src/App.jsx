import { useState } from 'react';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step: {step}:</h3> {children}
    </div>
  );
}

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handleOpen() {
    setIsOpen(step => !step);
  }

  function handlePrevious() {
    setStep(step - 1);
    if (step === 1) {
      setStep(step => step + 1);
    }
  }

  function handleNext() {
    setStep(step + 1);
    if (step === 3) {
      setStep(step => step - 1);
    }
  }

  return (
    <>
      <button className="close" onClick={handleOpen}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step === 1 ? 'active' : null}>1</div>
            <div className={step === 2 ? 'active' : null}>2</div>
            <div className={step === 3 ? 'active' : null}>3</div>
          </div>

          <StepMessage step={step}>{messages[step - 1]}</StepMessage>

          <div className="buttons">
            <Button textColor="#fff" bgColor="#7950f2" onClick={handlePrevious}>
              <span>👈</span> Previous
            </Button>
            <Button textColor="#fff" bgColor="#7950f2" onClick={handleNext}>
              Next<span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
