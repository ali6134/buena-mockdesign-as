// src/pages/Welcome.test.tsx

import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Welcome from './Welcome';

test('renders Welcome component', () => {
  const { getByText } = render(
    <BrowserRouter>
      <Welcome />
    </BrowserRouter>
  );
  expect(getByText(/First step towards freedom./i)).toBeInTheDocument();
});
