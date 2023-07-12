import '@testing-library/jest-dom/extend-expect';
import {fireEvent, render} from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('Calculate', () => {
  it('renders Calculate component', () => {
    const calculator = render(<Calculator />);
    
    expect(calculator.container).toMatchSnapshot();
    
  })

  it('displaying button by clicking event', () => {
    const calc = render (<Calculator />);
    const display = calc.container.querySelector('.form-control');

    fireEvent.click(calc.getByText('9'));

    expect(display.innerHTML).toEqual('')
  })


})