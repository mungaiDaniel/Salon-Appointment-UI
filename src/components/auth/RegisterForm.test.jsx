import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import RegisterForm, { registerUserRequest } from './RegisterForm';
import httpClient from '../../httpClient';

const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigate,
}));

describe('RegisterForm Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders all registration fields and submit button', () => {
    render(
      <BrowserRouter>
        <RegisterForm />
      </BrowserRouter>
    );

    expect(screen.getByLabelText(/First name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/location/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /^Sign up$/i })).toBeInTheDocument();
  });

  test('handles successful user registration and navigates to /login', async () => {
    const mockPost = jest.spyOn(httpClient, 'post').mockResolvedValueOnce({
      data: { message: 'User created' },
    });

    render(
      <BrowserRouter>
        <RegisterForm />
      </BrowserRouter>
    );

    fireEvent.change(screen.getByLabelText(/First name/i), {
      target: { value: 'Jane' },
    });
    fireEvent.change(screen.getByLabelText(/Last name/i), {
      target: { value: 'Doe' },
    });
    fireEvent.change(screen.getByLabelText(/Email address/i), {
      target: { value: 'jane@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: 'secret123' },
    });
    fireEvent.change(screen.getByLabelText(/Phone Number/i), {
      target: { value: '0712345678' },
    });
    fireEvent.change(screen.getByLabelText(/location/i), {
      target: { value: 'Nairobi' },
    });

    fireEvent.click(screen.getByRole('button', { name: /^Sign up$/i }));

    await waitFor(() => {
      expect(mockPost).toHaveBeenCalledWith('/users', {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane@example.com',
        password: 'secret123',
        location: 'Nairobi',
        phoneNumber: '0712345678',
      });
      expect(
        screen.getByText(/Sussessful registered now you can login/i)
      ).toBeInTheDocument();
      expect(mockedNavigate).toHaveBeenCalledWith('/login');
    });

    mockPost.mockRestore();
  });

  test('handles registration error and displays error alert', async () => {
    const mockPost = jest.spyOn(httpClient, 'post').mockRejectedValueOnce(
      new Error('Validation error')
    );

    render(
      <BrowserRouter>
        <RegisterForm />
      </BrowserRouter>
    );

    fireEvent.change(screen.getByLabelText(/First name/i), {
      target: { value: 'Jane' },
    });
    fireEvent.change(screen.getByLabelText(/Email address/i), {
      target: { value: 'invalid-email' },
    });

    fireEvent.click(screen.getByRole('button', { name: /^Sign up$/i }));

    await waitFor(() => {
      expect(mockPost).toHaveBeenCalled();
      expect(screen.getByText(/Input error check again/i)).toBeInTheDocument();
    });

    mockPost.mockRestore();
  });

  test('registerUserRequest helper calls httpClient.post with payload', async () => {
    const mockPost = jest.spyOn(httpClient, 'post').mockResolvedValueOnce({
      data: { success: true },
    });

    const payload = { firstName: 'Alice', email: 'alice@test.com' };
    const res = await registerUserRequest(payload);
    expect(mockPost).toHaveBeenCalledWith('/users', payload);
    expect(res.data.success).toBe(true);

    mockPost.mockRestore();
  });
});
