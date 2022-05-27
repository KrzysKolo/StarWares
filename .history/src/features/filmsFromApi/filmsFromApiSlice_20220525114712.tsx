import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
/* import { Planet } from '../../models/Planet'; */
export interface filmsFromApiType {
  filmsFromApi: [];
};

const initialState: filmsFromApiType = {
  filmsFromApi: [],
};

const filmsFromApiSlice = createSlice({
  name: 'filmsFromApi',
  initialState,
  reducers: {
    getFilmsFromApi: (state, action) => {
      state.filmsFromApi = action.payload;
      },
    }
  });

export const { getFilmsFromApi } = filmsFromApiSlice.actions;
export const getAllFilmsFromApi = (state: RootState) => state.filmsFromApi.filmsFromApi;
export default filmsFromApiSlice.reducer;