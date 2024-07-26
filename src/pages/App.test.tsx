import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';
import { AppProvider } from '../AppContext';

test('navigates to personal info page on get started button click', () => {
  const { getByText } = render(
    <AppProvider>
      <App />
    </AppProvider>
  );

  fireEvent.click(getByText(/get started/i));

  expect(getByText(/personal information/i)).toBeInTheDocument();
});
