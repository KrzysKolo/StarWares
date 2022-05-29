/* pobieranie danych o gwiazdach https://swapi.dev/api/planets/ z API */
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
export interface planetsApiType {
  filmsLocalStorageList: [] | any;
  titleFilms: [],
  isLoading: boolean,
};

const initialState: planetsApiType = {
  filmsLocalStorageList: [],
  titleFilms: [],
  isLoading: true,
};

const filmsLocalStorageSlice = createSlice({
  name: 'filmsLocalStorage',
  initialState,
  reducers: {
    getFilmsLocalStorage: (state, action) => {
      state.filmsLocalStorageList = action.payload;
      },
    getTitleFilmsLocalStorage: (state, action) => {
      state.titleFilms = action.payload;
      },
     }
  });

export const { getFilmsLocalStorage, getTitleFilmsLocalStorage } = filmsLocalStorageSlice.actions;
export const getAllFilmsLocalStorage = (state: RootState) => state.filmsFromLocalStorage.filmsLocalStorageList;
export const getAllTitleFilmsLocalStorage = (state: RootState) => state.filmsFromLocalStorage.titleFilms;
export default filmsLocalStorageSlice.reducer;