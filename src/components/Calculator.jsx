import React, { useState } from 'react';
import Button from './Button';
import CalculationBar from './CalculationBar';
import calculate from '../logic/calculate';

const style = {
  width: '300px',
  margin: '32px auto',
};

const symbols = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

const rightButtons = ['÷', 'x', '-', '+', '='];
const initObject = {
  total: null,
  next: null,
  operation: null,
};

const Calculator = () => {
  const [currentData, refactorCurrentDate] = useState(initObject);
  const { total, next } = currentData;
  const displayValue = next || total || 0;

  const btnClickHandler = (value) => {
    refactorCurrentDate((curData) => calculate(curData, value));
  };

  // Button Elements
  const elements = symbols.map((btnName) => {
    let btnType = 'outline-success';
    if (btnName === 'AC') {
      btnType = 'danger';
    } else if (rightButtons.includes(btnName)) {
      btnType = 'success';
    }
    return <Button value={btnName} col={btnName === '0' ? 6 : 3} key={btnName} btnType={btnType} click={() => btnClickHandler(btnName)} />;
  });

  return (
    <div className="row border border-success p-2 rounded" style={style}>
      <CalculationBar value={displayValue} />
      {elements}
    </div>
  );
};

export default Calculator;
