import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { AppDispatch } from './app/store';
import { getFilmItems } from './features/films/filmsSlice';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { NotFound, StarWaresPage } from './pages';

function App() {

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getFilmItems())
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<StarWaresPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
