import { render, screen, fireEvent } from '@testing-library/react';
import BoxInput from './../BoxInput';

describe('<BoxInput />', () => {

    it('Renders the component', () => {
      render(<BoxInput label={'test'} value={''} infoText={'test'}  />);
      screen.getByPlaceholderText('test');
    });

/*   it('Displays books when search phrase is matching', async () => {
    const onSearchChange = jest.fn();
      render(<Search />);
      const valueSearch = await screen.findByText("Search");
      fireEvent.change(valueSearch, { target: { value: "test" } });
      expect(onSearchChange).toHaveBeenCalledWith("test");
  })

   onChange={(jest.fn())}
  */
})