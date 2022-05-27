/* pobieranie danych o gwiazdach https://swapi.dev/api/planets/ z API */
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Planet } from '../../models/Planet';

export interface planetsApiType {
  filmsLocalStorageList: [];
};

const initialState: planetsApiType = {
  filmsLocalStorageList: [],
};

const filmsLocalStorageSlice = createSlice({
  name: 'filmsLocalStorage',
  initialState,
  reducers: {
    getFilmsLocalStorage: (state, action) => {
      state.filmsLocalStorageList = action.payload;
      },
    }
  });

export const { getFilmsLocalStorage } = filmsLocalStorageSlice.actions;
export const getAllFilmsLocalStorage = (state: RootState) => state.filmsFromLocalStorage.filmsLocalStorageList;
export default filmsLocalStorageSlice.reducer;