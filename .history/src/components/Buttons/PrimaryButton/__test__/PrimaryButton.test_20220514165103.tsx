import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PrimaryButton from '../PrimaryButton';
import { text } from 'stream/consumers';

describe('<PrimaryButton />', () => {
  it('should display title', () => {
    render(<PrimaryButton title={'test'} variant={'primary'} onClick={onClickMock} />);
    const button = screen.getByText('test');
    const onClickMock = jest.fn();
    expect(button).toBeDefined();
    userEvent.click(button);
    expect(onClickMock).toBeCalled();
   });
})