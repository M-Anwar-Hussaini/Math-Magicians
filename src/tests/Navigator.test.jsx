import '@testing-library/jest-dom/extend-expect';
import { screen, render } from '@testing-library/react';
import Navigator from '../components/Navigator';

describe('Calculate', () => {
  it('Renders Navigator component', () => {
    const nav = render(<Navigator />);

    expect(nav.container).toMatchSnapshot();
  });

  it('Renders Navigator component', () => {
    render(<Navigator />);
    const element = screen.getByText('Home');

    expect(element).toBeInTheDocument();
  });
});
