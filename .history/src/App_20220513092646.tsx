import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { AppDispatch } from './app/store';
import { getFilmItems } from './features/films/filmsSlice';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { NotFound } from './pages';
import { StarWaresPages } from './'

function App() {

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getFilmItems())
  }, []);

  return (
    <Router>
      <Routers>
        <Route path="/" element={<BooksPage />} />
        <Route path="*" element={<NotFound />} />
      </Routers>
    </Router>
  );
}

export default App;
