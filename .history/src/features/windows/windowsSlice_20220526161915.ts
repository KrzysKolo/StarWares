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
    isShowInfoPlanets: (state, action) => {
      state.isShowInfoPlanets = action.payload;
    },
  }
})

export const { isShowAddMovieChange, isShowInfoPlanets } = windowsSlice.actions;
export const stateWindowAddMovie = (state: RootState) => state.windows.isShowAddMovie;
export const stateWindowShowPlanets = (state: RootState) => state.windows.isShowInfoPlanets;
export default windowsSlice.reducer;