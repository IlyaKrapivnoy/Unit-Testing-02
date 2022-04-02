import React from 'react';
import Counter from '../Counter';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

it('header renders with correct text', () => {
    render(<Counter />);
    const headerEL = screen.getByTestId('header');

    expect(headerEL.textContent).toBe('Counter');
});

it('counter initially starts with zero', () => {
    const { getByTestId } = render(<Counter />);
    const counterEl = getByTestId('counter');

    expect(counterEl.textContent).toBe('0');
});

it('input contains initial value of 1', () => {
    const { getByTestId } = render(<Counter />);
    const inputEl = getByTestId('input');

    expect(inputEl.value).toBe('1');
});

it('add button renders with +', () => {
    const { getByTestId } = render(<Counter />);
    const addBtn = getByTestId('add-btn');

    expect(addBtn.textContent).toBe('+');
});

it('subtract button renders with -', () => {
    const { getByTestId } = render(<Counter />);
    const subtractBtn = getByTestId('subtract-btn');

    expect(subtractBtn.textContent).toBe('-');
});