import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PersonalInfo from './PersonalInfo';
import { AppProvider } from '../AppContext';

test('shows validation error when full name is empty', async () => {
  const { getByText, getByLabelText } = render(
    <AppProvider>
      <BrowserRouter>
        <PersonalInfo setCurrentStep={() => {}} />
      </BrowserRouter>
    </AppProvider>
  );

  // Fire the submit event on the form
  const form = getByLabelText(/full name/i).closest('form');
  if (form) {
    fireEvent.submit(form);
  }

  // Wait for the validation error message to appear
  await waitFor(() => {
    expect(getByText(/Full Name is required/i)).toBeInTheDocument();
  });
});
