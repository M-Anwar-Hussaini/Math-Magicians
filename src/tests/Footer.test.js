import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from '../components/Footer';

describe('Test the funtionalities of footer', () => {
  const footerEl = render(<Footer />);

  // Create snapshot for later matching
  test('Match the snapshot', () => {
    expect(footerEl).toMatchSnapshot();
  });

  // Test whether this component contains a footer element
  test('Footer components contains a footer html tag', () => {
    render(<Footer />);
    const footerTag = screen.getByRole('contentinfo');
    expect(footerTag).toBeInTheDocument();
  });

  // Test whether this component contains a heading element
  test('Footer components contains a heading html tag', () => {
    render(<Footer />);
    const headingTag = screen.getByRole('heading');
    expect(headingTag).toBeInTheDocument();
  });
});
