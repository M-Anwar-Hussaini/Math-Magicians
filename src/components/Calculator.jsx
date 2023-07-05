import React from 'react';
import Button from './Button';
import Calculation from './CalculationBar';

const style = {
  width: '300px',
  margin: '32px auto',
};

const symbols = [
  'AC',
  '+/-',
  '%',
  '÷',
  '7',
  '8',
  '9',
  '*',
  '4',
  '5',
  '6',
  '-',
  '1',
  '2',
  '3',
  '+',
  '0',
  '.',
  '=',
];

const rightButtons = ['÷', '*', '-', '+', '='];

const Container = () => {
  const elements = symbols.map((s) => {
    const btnType = rightButtons.includes(s) ? 'warning' : 'light';
    return (
      <Button value={s} col={s === '0' ? 6 : 3} key={s} btnType={btnType} />
    );
  });

  return (
    <div className="row border border-warning p-2 rounded" style={style}>
      {/* Calculation display */}
      <Calculation />
      {elements}
    </div>
  );
};

export default Container;
