import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Content, { bookAppointmentRequest } from './Content';
import httpClient from '../../httpClient';

describe('BookAppointment Content Component', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
    jest.spyOn(httpClient, 'get').mockResolvedValue({ data: [] });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('renders appointment title and initial step', () => {
    render(<Content />);

    expect(
      screen.getByText(/Your Appointment Information/i)
    ).toBeInTheDocument();
    expect(screen.getAllByText(/Master/i).length).toBeGreaterThan(0);
    expect(screen.getByRole('button', { name: /^Next$/i })).toBeInTheDocument();

    const backButton = screen.getByRole('button', { name: /^Back$/i });
    expect(backButton).toBeDisabled();
  });

  test('navigates through booking steps using Next and Back buttons', () => {
    render(<Content />);

    const nextButton = screen.getByRole('button', { name: /^Next$/i });
    const backButton = screen.getByRole('button', { name: /^Back$/i });

    expect(backButton).toBeDisabled();

    // Step 0 -> Step 1 (Service)
    fireEvent.click(nextButton);
    expect(backButton).not.toBeDisabled();

    // Step 1 -> Step 2 (Date)
    fireEvent.click(nextButton);
    expect(screen.getByText(/Select Date/i)).toBeInTheDocument();

    // Step 2 -> Step 3 (Contact / Summary)
    fireEvent.click(nextButton);
    expect(screen.getByText(/Assistance:/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /^Submit$/i })).toBeInTheDocument();

    // Navigate back Step 3 -> Step 2
    fireEvent.click(backButton);
    expect(screen.getByText(/Select Date/i)).toBeInTheDocument();
  });

  test('handles appointment booking submission with auth token', async () => {
    localStorage.setItem('access_token', 'valid-booking-token');
    const mockPost = jest.spyOn(httpClient, 'post').mockResolvedValueOnce({
      data: { id: 101, message: 'Booking confirmed' },
    });

    render(<Content />);

    // Step 0 -> 1 -> 2 -> 3
    const nextButton = screen.getByRole('button', { name: /^Next$/i });
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);

    const submitButton = screen.getByRole('button', { name: /^Submit$/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockPost).toHaveBeenCalledWith(
        '/booking',
        {
          employee_id: '',
          service_id: '',
          date: '',
        },
        {
          headers: {
            Authorization: 'Bearer valid-booking-token',
          },
        }
      );
      expect(
        screen.getByText(/Appointment booked successfully!/i)
      ).toBeInTheDocument();
    });
  });

  test('handles appointment booking error response', async () => {
    const mockPost = jest.spyOn(httpClient, 'post').mockRejectedValueOnce(
      new Error('Booking failed')
    );

    render(<Content />);

    // Step 0 -> 1 -> 2 -> 3
    const nextButton = screen.getByRole('button', { name: /^Next$/i });
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);

    const submitButton = screen.getByRole('button', { name: /^Submit$/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockPost).toHaveBeenCalled();
      expect(
        screen.getByText(/Failed to book appointment. Please try again./i)
      ).toBeInTheDocument();
    });
  });

  test('bookAppointmentRequest helper function sends POST with auth header', async () => {
    const mockPost = jest.spyOn(httpClient, 'post').mockResolvedValueOnce({
      data: { success: true },
    });

    const bookingData = { employee_id: 1, service_id: 2, date: '2026-09-01' };
    const res = await bookAppointmentRequest(bookingData, 'my-token');

    expect(mockPost).toHaveBeenCalledWith('/booking', bookingData, {
      headers: { Authorization: 'Bearer my-token' },
    });
    expect(res.data.success).toBe(true);
  });
});
