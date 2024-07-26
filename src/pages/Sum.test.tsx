import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { toast } from 'react-toastify';
import Sum from './Sum';
import { AppProvider } from '../AppContext';
import { BrowserRouter } from 'react-router-dom';

jest.mock('react-toastify', () => ({
  toast: {
    success: jest.fn(),
  },
}));

test('shows success notification on form submit', async () => {
  const setCurrentStepMock = jest.fn();

  const { getByText } = render(
    <AppProvider>
      <BrowserRouter>
        <Sum setCurrentStep={setCurrentStepMock} />
      </BrowserRouter>
    </AppProvider>
  );

  fireEvent.click(getByText(/submit/i));

  await waitFor(() => {
    fireEvent.click(getByText(/yes/i));
  });

  await waitFor(() => {
    expect(toast.success).toHaveBeenCalledWith('Thank you for your time!', { position: "top-center" });
  });
});
