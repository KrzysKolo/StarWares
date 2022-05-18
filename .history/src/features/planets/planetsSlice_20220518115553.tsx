/* pobieranie danych o gwiazdach https://swapi.dev/api/planets/ z API */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiUrl, keyGoogle } from '../../api/booksApi';
import GoogleBook from '../../api/google';
import { RootState } from '../../app/store';

export interface planetsApiType {
  planetsList: [];
};

const initialState: planetsApiType = {
  planetsList: [],
};

const planetsApiSlice = createSlice({
  name: 'planetsApiApi',
  initialState,
  reducers: {
    getGoogleBooksAPI: (state, action) => {
      state.googleBooksApi = action.payload;
    },
    addPhrase: (state, action) => {
      state.phrase = action.payload;
    },
    addLanguage: (state, action) => {
      state.language = action.payload;
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    setError(state, action) {
      state.isError = action.payload;
    }
  },
});

export const { getGoogleBooksAPI, addPhrase, addLanguage, setError, setLoading  } = googleBooksApiSlice.actions;
export const getAllGoogleBooksApi = (state: RootState) => state.googleBooksApi.googleBooksApi;
export const addPhraseBook = (state: RootState) => state.googleBooksApi.phrase;
export const addLanguageBook = (state: RootState) => state.googleBooksApi.language;
export const isError = (state: RootState) => state.googleBooksApi.isError;
export const isLoading = (state: RootState) => state.googleBooksApi.isLoading;
export default googleBooksApiSlice.reducer;