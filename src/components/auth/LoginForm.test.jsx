import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import LoginForm, { loginUserRequest } from './LoginForm';
import httpClient from '../../httpClient';

const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigate,
}));

describe('LoginForm Component', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  test('renders LoginForm fields and submit button', () => {
    render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );

    expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /^Login$/i })).toBeInTheDocument();
  });

  test('toggles password visibility', () => {
    render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );

    const passwordInput = screen.getByLabelText(/Password/i);
    expect(passwordInput.getAttribute('type')).toBe('password');

    const toggleButton = screen.getByRole('button', { name: '' });
    fireEvent.click(toggleButton);
    expect(passwordInput.getAttribute('type')).toBe('text');

    fireEvent.click(toggleButton);
    expect(passwordInput.getAttribute('type')).toBe('password');
  });

  test('handles successful login and stores auth credentials', async () => {
    const mockPost = jest.spyOn(httpClient, 'post').mockResolvedValueOnce({
      data: {
        value: {
          access_token: 'fake-token-123',
          user_role: 'admin',
        },
      },
    });

    render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );

    fireEvent.change(screen.getByLabelText(/Email Address/i), {
      target: { value: 'user@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: 'password123' },
    });

    fireEvent.click(screen.getByRole('button', { name: /^Login$/i }));

    await waitFor(() => {
      expect(mockPost).toHaveBeenCalledWith('/login', {
        email: 'user@example.com',
        password: 'password123',
      });
      expect(localStorage.getItem('access_token')).toBe('fake-token-123');
      expect(localStorage.getItem('user_role')).toBe('admin');
      expect(screen.getByText(/successfully login/i)).toBeInTheDocument();
      expect(mockedNavigate).toHaveBeenCalledWith('/');
    });

    mockPost.mockRestore();
  });

  test('handles login error and displays error alert', async () => {
    const mockPost = jest.spyOn(httpClient, 'post').mockRejectedValueOnce(
      new Error('Invalid credentials')
    );

    render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );

    fireEvent.change(screen.getByLabelText(/Email Address/i), {
      target: { value: 'wrong@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: 'wrongpass' },
    });

    fireEvent.click(screen.getByRole('button', { name: /^Login$/i }));

    await waitFor(() => {
      expect(mockPost).toHaveBeenCalled();
      expect(
        screen.getByText(/Wrong password or email credentials/i)
      ).toBeInTheDocument();
    });

    mockPost.mockRestore();
  });

  test('loginUserRequest function directly invokes httpClient.post', async () => {
    const mockPost = jest.spyOn(httpClient, 'post').mockResolvedValueOnce({
      data: { value: { access_token: 'test' } },
    });

    const res = await loginUserRequest('test@mail.com', 'pass');
    expect(mockPost).toHaveBeenCalledWith('/login', {
      email: 'test@mail.com',
      password: 'pass',
    });
    expect(res.data.value.access_token).toBe('test');

    mockPost.mockRestore();
  });
});
