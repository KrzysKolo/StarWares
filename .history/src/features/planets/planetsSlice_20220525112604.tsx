/* pobieranie danych o gwiazdach https://swapi.dev/api/planets/ z API */
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Planet } from '../../models/Planet';
export interface planetsApiType {
  planetsList: Planet[];
};

const initialState: planetsApiType = {
  planetsList: [],
};

const planetsApiSlice = createSlice({
  name: 'planets',
  initialState,
  reducers: {
    getPlanetsApi: (state, action) => {
      state.planetsList = action.payload;
      },
    }
  });

export const { getPlanetsApi } = planetsApiSlice.actions;
export const getAllPlanetsApi = (state: RootState) => state.planets.planetsList;
export default planetsApiSlice.reducer;