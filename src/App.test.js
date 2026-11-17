import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders Salon Gerente brand title', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const brandElements = screen.getAllByText(/Salon Gerente/i);
  expect(brandElements.length).toBeGreaterThan(0);
});
