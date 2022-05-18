/* pobieranie danych o gwiazdach https://swapi.dev/api/planets/ z API */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../../app/store';

export interface planetsApiType {
  planetsList: [];
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