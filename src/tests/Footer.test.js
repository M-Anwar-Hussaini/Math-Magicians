import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from '../components/Footer';

describe('Test the funtionalities of footer', () => {
  // Test whether this component contains a footer element
  test('Footer components contains a footer html tag', () => {
    render(<Footer />);
    const footerTag = screen.getAllByRole('contentinfo')[0];
    expect(footerTag).toBeInTheDocument();
  });

  // Test whether this component contains a heading element
  test('Footer components contains a heading html tag', () => {
    render(<Footer />);
    const headingTag = screen.getByRole('heading');
    expect(headingTag).toBeInTheDocument();
  });
});
