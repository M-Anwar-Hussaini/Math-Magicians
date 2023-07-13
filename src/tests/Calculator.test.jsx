import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('Calculate', () => {
  it('Renders Calculate component', () => {
    const calculator = render(<Calculator />);

    expect(calculator.container).toMatchSnapshot();
  });

  it('Initial display', () => {
    const calculator = render(<Calculator />);
    const display = calculator.container.querySelector('.form-control');

    expect(display.value).toBe('0');
  });

  it('Display the result of an operation', () => {
    const calculator = render(<Calculator />);
    const display = calculator.container.querySelector('.form-control');

    fireEvent.click(calculator.getByText('5'));
    fireEvent.click(calculator.getByText('+'));
    fireEvent.click(calculator.getByText('8'));
    fireEvent.click(calculator.getByText('5'));
    fireEvent.click(calculator.getByText('='));

    expect(display.value).toBe('90');
  });
});
