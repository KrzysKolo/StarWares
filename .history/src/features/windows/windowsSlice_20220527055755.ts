import { createSlice } from '@reduxjs/toolkit';
import { RootState, } from '../../app/store';

export type windowsType = {
  isShowAddMovie: boolean;
  isShowInfoPlanets: boolean;
}

const initialState: windowsType = {
  isShowAddMovie: false,
  isShowInfoPlanets: false,
};

const windowsSlice = createSlice({
  name: 'windows',
  initialState,
  reducers: {
    isShowAddMovieChange: (state, action) => {
      state.isShowAddMovie = action.payload;
    },
  }
})

export const { isShowAddMovieChange } = windowsSlice.actions;
export const stateWindowAddMovie = (state: RootState) => state.windows.isShowAddMovie;
export default windowsSlice.reducer;