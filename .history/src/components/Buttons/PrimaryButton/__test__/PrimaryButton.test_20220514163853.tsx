import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PrimaryButton from '../PrimaryButton';
import { text } from 'stream/consumers';

describe('<PrimaryButton />', () => {
  it('should display title', () => {
    render(<PrimaryButton title={'test'} variant={'primary'} onClick={jest.fn()} />);
    const title = screen.getByText('test');
    expect(title).toBeDefined();
  });
})