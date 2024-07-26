import React, { useContext } from 'react';
import { fireEvent, render } from '@testing-library/react';
import { AppProvider, AppContext } from '../AppContext';

const TestComponent = () => {
  const { state, dispatch } = useContext(AppContext);
  return (
    <div>
      <span>{state.fullName}</span>
      <button onClick={() => dispatch({ type: 'SET_FULL_NAME', payload: 'John Doe' })}>
        Set Full Name
      </button>
    </div>
  );
};

test('updates state and saves to localStorage', () => {
  const { getByText } = render(
    <AppProvider>
      <TestComponent />
    </AppProvider>
  );

  fireEvent.click(getByText(/Set Full Name/i));

  expect(getByText(/John Doe/i)).toBeInTheDocument();
  expect(localStorage.getItem('appState')).toContain('John Doe');
});
