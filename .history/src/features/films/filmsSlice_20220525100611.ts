import { createSlice, createAsyncThunk, AsyncThunk } from '@reduxjs/toolkit';
import { boolean } from 'yup';
import { AppDispatch, RootState } from '../../app/store';
import { Planet } from '../../models/Planet';
import { getStarWaresFilms } from '../../services/swapi/swapi';

export type FilmsTabType = {
  filmsTab: Planet[],
  isLoading: boolean,
  isError: boolean,
}
interface IThunkApi {
  dispatch: AppDispatch,
  state: RootState,
}
const initialState: FilmsTabType = {
  filmsTab: [],
  isLoading: true,
  isError: false,
}
export const getFilmItems = createAsyncThunk(
  'films/getFilmItems', async (name, thunkAPI) => {
    try {
      const films = await getStarWaresFilms()
      return films.data.results;
    }
    catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
});
const starWarsSlice = createSlice({
  name: 'getFilmItems',
  initialState,
  reducers: {},
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(getFilmItems.pending, (state) => {
  //       state.isLoading = true;
  //     })
  //     .addCase(getFilmItems.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //       state.filmsTab = action.payload;
  //     })
  //     .addCase(getFilmItems.rejected, (state) => {
  //       state.isLoading = false;
  //     });
  // },
  extraReducers: {
    [getFilmItems.pending]: (state: FilmsTabType) => {
      state.isLoading = true;
    },
    [getFilmItems.fulfilled]: (state: FilmsTabType, action) => {
      state.isLoading = false;
      state.filmsTab = action.payload;
    },
    [getFilmItems.rejected]: (state:l FilmsTabType, action) => {
      state.isLoading = false;
    },
  },
});

export default starWarsSlice.reducer;