import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
/* import { Planet } from '../../models/Planet'; */
export interface allFilmsType {
  allFilms: [];
};

const initialState: allFilmsType = {
  allFilms: [],
};

const allFilmsSlice = createSlice({
  name: 'allFilms',
  initialState,
  reducers: {
    getAllFilms: (state, action) => {
      state.allFilms = action.payload;
      },
    }
  });

export const { getAllFilms } = allFilmsSlice.actions;
export const getFilmsApiAndStorage = (state: RootState) => state.allFilms.allFilms;
export default allFilmsSlice.reducer;