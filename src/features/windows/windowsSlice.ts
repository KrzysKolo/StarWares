import { createSlice } from '@reduxjs/toolkit';
import { RootState, } from '../../app/store';

export type windowsType = {
  isShowAddMovie: boolean;
  variantButton: boolean;
}

const initialState: windowsType = {
  isShowAddMovie: false,
  variantButton: true,
};

const windowsSlice = createSlice({
  name: 'windows',
  initialState,
  reducers: {
    isShowAddMovieChange: (state, action) => {
      state.isShowAddMovie = action.payload;
    },
    changeVariantButton: (state, action) => {
      state.variantButton = action.payload;
    },
  }
})

export const { isShowAddMovieChange, changeVariantButton } = windowsSlice.actions;
export const stateWindowAddMovie = (state: RootState) => state.windows.isShowAddMovie;
export const stateVariantButton = (state: RootState) => state.windows.variantButton;
export default windowsSlice.reducer;