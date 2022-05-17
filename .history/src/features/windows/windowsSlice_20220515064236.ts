import { createSlice } from '@reduxjs/toolkit';
import { RootState, } from '../../app/store';

export type windowsType = {
  isShowAddMovie: boolean;
}

const initialState: windowsType = {
  isShowAddMovie: true,
};

const windowsSlice = createSlice({
  name: 'windows',
  initialState,
  reducers: {
    isShowAddMovieChange: (state, action) => {
      state.isShowAddMovie = action.payload;
    }
  }
})

export const { isShowAddMovieChange } = windowsSlice.actions;
export const stateWindowsAddMovie = (state: RootState) => state.windows.isShowAddMovie;
export default windowsSlice.reducer;