import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Planet } from '../../models/Planet';
import { getStarWaresFilms } from '../../services/swapi/swapi';

export type FilmsTabType = {
  filmsTab: Planet[],
  isLoading: boolean,
  isError: boolean,
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
  extraReducers: (builder) => {
    builder
      .addCase(getFilmItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFilmItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.filmsTab = action.payload;
      })
      .addCase(getFilmItems.rejected, (state) => {
        state.isLoading = false;
      });
  },

});

export default starWarsSlice.reducer;