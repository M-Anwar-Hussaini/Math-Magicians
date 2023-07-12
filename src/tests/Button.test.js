import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from '../components/Button';

describe('Test the header component', () => {
  test('Creat snapshot for button', () => {
    const btn = render(
      <Button value="9" click={() => 12} col={3} btnType="primary" key={9} />,
    );
    expect(btn).toMatchSnapshot();
  });
  test('The button should have value of 9', () => {
    render(
      <Button value="9" click={() => 12} col={3} btnType="primary" key={9} />,
    );
    const element = screen.getByText('9');
    expect(element).toBeInTheDocument();
  });
});
