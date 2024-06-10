import React, { useState } from 'react';
import './Calculator.css';
import Button from './Button';
import Display from './Display';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const handleButtonClick = (value) => {
    if (value === 'C') {
      setInput('');
      setResult(null);
    } else if (value === '=') {
      try {
        setResult(eval(input)); // Note: Using eval is not recommended in production due to security risks.
      } catch {
        setResult('Error');
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <Display input={input} result={result} />
      <div className="button-grid">
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'].map((value) => (
          <Button key={value} value={value} onClick={handleButtonClick} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
