/* pobieranie danych o gwiazdach https://swapi.dev/api/planets/ z API */
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Planet } from '../../models/Planet';

export interface planetsApiType {
  filmsLocalStorageList: [] | any;
  titleFilms: []
};

const initialState: planetsApiType = {
  filmsLocalStorageList: [],
  titleFilms: []
};

const filmsLocalStorageSlice = createSlice({
  name: 'filmsLocalStorage',
  initialState,
  reducers: {
    addNewFilms: (state, action) => {
      state.filmsLocalStorageList(action.payload);
      },
    getFilmsLocalStorage: (state, action) => {
      state.filmsLocalStorageList = action.payload;
      },
    getTitleFilmsLocalStorage: (state, action) => {
      state.titleFilms = action.payload;
      },
    }
  });

export const { getFilmsLocalStorage, getTitleFilmsLocalStorage, addNewFilms } = filmsLocalStorageSlice.actions;
export const getAllFilmsLocalStorage = (state: RootState) => state.filmsFromLocalStorage.filmsLocalStorageList;
export const getAllTitleFilmsLocalStorage = (state: RootState) => state.filmsFromLocalStorage.titleFilms;
export default filmsLocalStorageSlice.reducer;