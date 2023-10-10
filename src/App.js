import { useState } from "react";

const message = [
  'Learn React',
  'Apply for jobs',
  'Invest your new income'
];

export default function App() {

  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handelPrevious() {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  }

  function handelNext() {
    if (step < 3) {
      setStep((s) => s + 1);
    }
  }



  return <>

    <button className="close" onClick={() => setIsOpen((is) => !is)}>&times;</button>

    {isOpen &&
      <div className="steps">
        <div className="numbers">
          <div className={`${step >= 1 ? 'active' : ''}`}>1</div>
          <div className={`${step >= 2 ? 'active' : ''}`}>2</div>
          <div className={`${step >= 3 ? 'active' : ''}`}>3</div>
        </div>


        <StepMessage step={step} />

        <div className="buttons">


          <Button bgColor="#7950f2" textColor="#fff" text="previous" onClick={handelPrevious} />

          <Button bgColor="#7950f2" textColor="#fff" text="Next" onClick={handelNext} />


        </div>
      </div>
    }
  </>
}

function StepMessage({ step, children }) {
  return (
    <p className="message">
      <h3>Step {step}</h3>
      {children}
    </p>
  )
}


function Button({ textColor, bgColor, onClick, text }) {
  return (
    <button style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}>
      {text}
    </button>
  )
}