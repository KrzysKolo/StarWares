import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PrimaryButton from '../PrimaryButton';

describe('<PrimaryButton />', () => {
  it('should display title', () => {
    const onClickMock = jest.fn();
    render(<PrimaryButton title={'test'} primary={true} onClick={onClickMock} />);
    const button = screen.getByText('test');
    expect(button).toBeDefined();
    userEvent.click(button);
    expect(onClickMock).toBeCalled();
   });
})