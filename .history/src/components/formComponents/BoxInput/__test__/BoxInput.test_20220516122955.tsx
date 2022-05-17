import { render, screen, fireEvent } from '@testing-library/react';
import BoxInput from './../BoxInput';

describe('<BoxInput />', () => {

    it('Renders the component', () => {
      render(<BoxInput label={'test'} infoText={'test'} value={''} onChange={(jest.fn())} />);
      screen.getByPlaceholderText('test');
    });

/*   it('Displays books when search phrase is matching', async () => {
    const onSearchChange = jest.fn();
      render(<Search />);
      const valueSearch = await screen.findByText("Search");
      fireEvent.change(valueSearch, { target: { value: "test" } });
      expect(onSearchChange).toHaveBeenCalledWith("test");
  }) */
})