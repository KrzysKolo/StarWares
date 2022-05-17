import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getStarWaresFilms } from '../../services/swapi/swapi';


const initialState = {
  filmsTab: getStarWaresFilms,
  isLoading: true,
  isError: false,
}
export const getFilmItems = createAsyncThunk(
  'films/getFilmItems', (name, thunkAPI) => {
    try {
      const films = await getStarWaresFilms()
      console.log(films);
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