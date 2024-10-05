import { render, screen } from '@testing-library/react';
import App from './App';

test('renders click here link', () => {
  render(<App />);
  const linkElement = screen.getByText(/click/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
