import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getStarWaresFilms } from '../../services/swapi/swapi';

export const getFilmItems = createAsyncThunk(
  'films/getFilmItems', () => {
    getStarWaresFilms()
      .then((res) => {
        setFilms(res.data.results)
      })
      .catch((err) => console.log(err))
  });
