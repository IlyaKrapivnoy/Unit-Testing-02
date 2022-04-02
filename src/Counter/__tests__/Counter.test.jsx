import React from 'react';
import Counter from '../Counter';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('header renders with correct text', () => {
    render(<Counter />);
    const headerEL = screen.getByTestId('header');

    expect(headerEL.textContent).toBe('Counter');
});
