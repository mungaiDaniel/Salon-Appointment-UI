import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LoginForm from './auth/LoginForm';
import DemoBanner from './DemoBanner';
import App from '../App';
import httpClient from '../httpClient';

const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigate,
}));

const ORIGINAL = process.env.REACT_APP_DEMO_MODE;
afterEach(() => {
  if (ORIGINAL === undefined) {
    delete process.env.REACT_APP_DEMO_MODE;
  } else {
    process.env.REACT_APP_DEMO_MODE = ORIGINAL;
  }
  jest.clearAllMocks();
  localStorage.clear();
});

describe('demo mode UI', () => {
  test('banner is rendered by App only when the flag is on', () => {
    process.env.REACT_APP_DEMO_MODE = 'true';
    const { unmount } = render(<MemoryRouter><App /></MemoryRouter>);
    expect(screen.getByRole('status')).toHaveTextContent(/Demo mode/i);
    unmount();

    process.env.REACT_APP_DEMO_MODE = 'false';
    render(<MemoryRouter><App /></MemoryRouter>);
    expect(screen.queryByTestId('demo-banner')).not.toBeInTheDocument();
  });

  test('DemoBanner has accessible status text', () => {
    render(<DemoBanner />);
    expect(screen.getByRole('status')).toHaveTextContent('sample data, changes are not saved');
  });

  test('Try Demo buttons are hidden when the flag is off', () => {
    process.env.REACT_APP_DEMO_MODE = 'false';
    render(<MemoryRouter><LoginForm /></MemoryRouter>);
    expect(screen.queryByRole('button', { name: /Try Demo/i })).not.toBeInTheDocument();
  });

  test('Try Demo logs in as the demo user and navigates home', async () => {
    process.env.REACT_APP_DEMO_MODE = 'true';
    httpClient.post.mockResolvedValueOnce({
      data: { value: { access_token: 'demo-token-user', user_role: 'user' } },
    });
    render(<MemoryRouter><LoginForm /></MemoryRouter>);
    fireEvent.click(screen.getByRole('button', { name: /^Try Demo$/i }));
    await waitFor(() => expect(mockedNavigate).toHaveBeenCalledWith('/'));
    expect(httpClient.post).toHaveBeenCalledWith('/login', expect.objectContaining({ email: 'demo@example.com' }));
    expect(localStorage.getItem('access_token')).toBe('demo-token-user');
    expect(localStorage.getItem('user_role')).toBe('user');
  });

  test('Try Demo as Admin logs in as the admin demo account', async () => {
    process.env.REACT_APP_DEMO_MODE = 'true';
    httpClient.post.mockResolvedValueOnce({
      data: { value: { access_token: 'demo-token-super_admin', user_role: 'super_admin' } },
    });
    render(<MemoryRouter><LoginForm /></MemoryRouter>);
    fireEvent.click(screen.getByRole('button', { name: /Try Demo as Admin/i }));
    await waitFor(() => expect(mockedNavigate).toHaveBeenCalled());
    expect(httpClient.post).toHaveBeenCalledWith('/login', expect.objectContaining({ email: 'admin-demo@example.com' }));
    expect(localStorage.getItem('user_role')).toBe('super_admin');
  });
});
