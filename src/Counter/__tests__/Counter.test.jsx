import React from 'react';
import Counter from '../Counter';
import { render, screen, fireEvent } from '@testing-library/react';
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

it('change value of input works correctly', () => {
    const { getByTestId } = render(<Counter />);
    const inputEl = getByTestId('input');

    expect(inputEl.value).toBe('1');

    fireEvent.change(inputEl, {
        target: {
            value: '5',
        },
    });

    expect(inputEl.value).toBe('5');
});

it('clicking on plus btn adds 1 to counter', () => {
    const { getByTestId } = render(<Counter />);
    const addBtnEl = getByTestId('add-btn');
    const counterEl = getByTestId('counter');

    expect(counterEl.textContent).toBe('0');

    fireEvent.click(addBtnEl);

    expect(counterEl.textContent).toBe('1');
});

it('clicking on subtract btn subtracts 1 from counter', () => {
    const { getByTestId } = render(<Counter />);
    const subtractBtnEl = getByTestId('subtract-btn');
    const counterEl = getByTestId('counter');

    expect(counterEl.textContent).toBe('0');

    fireEvent.click(subtractBtnEl);

    expect(counterEl.textContent).toBe('-1');
});

it('changing input value then clicking on add btn works correctly', () => {
    const { getByTestId } = render(<Counter />);
    const addBtnEl = getByTestId('add-btn');
    const counterEl = getByTestId('counter');
    const inputEl = getByTestId('input');

    fireEvent.change(inputEl, {
        target: {
            value: '5',
        },
    });

    fireEvent.click(addBtnEl);

    expect(counterEl.textContent).toBe('5');
});

it('changing input value then clicking on subtract btn works correctly', () => {
    const { getByTestId } = render(<Counter />);
    const subtractBtnEl = getByTestId('subtract-btn');
    const counterEl = getByTestId('counter');
    const inputEl = getByTestId('input');

    fireEvent.change(inputEl, {
        target: {
            value: '5',
        },
    });

    fireEvent.click(subtractBtnEl);

    expect(counterEl.textContent).toBe('-5');
});

it('adding and then subtracting leads to the correct number', () => {
    const { getByTestId } = render(<Counter />);
    const subtractBtnEl = getByTestId('subtract-btn');
    const addBtnEl = getByTestId('add-btn');
    const counterEl = getByTestId('counter');
    const inputEl = getByTestId('input');

    fireEvent.change(inputEl, {
        target: {
            value: '10',
        },
    });

    fireEvent.click(addBtnEl);
    fireEvent.click(addBtnEl);
    fireEvent.click(addBtnEl);
    fireEvent.click(addBtnEl);
    fireEvent.click(subtractBtnEl);
    fireEvent.click(subtractBtnEl);

    expect(counterEl.textContent).toBe('20');

    fireEvent.change(inputEl, {
        target: {
            value: '5',
        },
    });

    fireEvent.click(addBtnEl);
    fireEvent.click(subtractBtnEl);
    fireEvent.click(subtractBtnEl);

    expect(counterEl.textContent).toBe('15');
});

it('counter contains correct className', () => {
    const { getByTestId } = render(<Counter />);
    const counterEl = getByTestId('counter');
    const inputEl = getByTestId('input');
    const subtractBtnEl = getByTestId('subtract-btn');
    const addBtnEl = getByTestId('add-btn');

    expect(counterEl.className).toBe(' ');

    fireEvent.change(inputEl, {
        target: {
            value: '50',
        },
    });

    expect(counterEl.className).toBe(' ');

    fireEvent.click(addBtnEl);

    expect(counterEl.className).toBe('green');

    fireEvent.click(addBtnEl);

    expect(counterEl.className).toBE('green');

    fireEvent.click(subtractBtnEl);
    fireEvent.click(subtractBtnEl);

    expect(counterEl.className).toBe(' ');

    fireEvent.click(subtractBtnEl);
    fireEvent.click(subtractBtnEl);
    fireEvent.click(subtractBtnEl);
    fireEvent.click(subtractBtnEl);

    expect(counterEl.className).toBe('red');
});