import { render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  window.scrollTo = jest.fn();
  window.IntersectionObserver = class {
    observe() {}
    disconnect() {}
  };
});

test('renders the Amreen Consultancy website', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { name: /global opportunities start here/i }),
  ).toBeInTheDocument();
});
