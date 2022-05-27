/* pobieranie danych o gwiazdach https://swapi.dev/api/planets/ z API */
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Planet } from '../../models/Planet';

export interface planetsApiType {
  planetsLocalStorageList: Planet[];
};

const initialState: planetsApiType = {
  planetsLocalStorageList: [],
};

const planetsLocalStorageSlice = createSlice({
  name: 'planetsFromLocalStorage',
  initialState,
  reducers: {
    getPlanetsLocalStorage: (state, action) => {
      state.planetsLocalStorageList = action.payload;
      },
    }
  });

export const { getPlanetsLocalStorage } = planetsLocalStorageSlice.actions;
export const getAllPlanetsLocalStorage = (state: RootState) => state.planetsFromLocalStorage.planetsLocalStorageList;
export default planetsLocalStorageSlice.reducer;