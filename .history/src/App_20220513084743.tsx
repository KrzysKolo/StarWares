import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { AppDispatch } from './app/store';
import { getFilmItems } from './features/films/filmsSlice';

function App() {

  const [film, setFilms] = useState([])
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getFilmItems())
  }, []);

  console.log(film)
  return (
    <div className="App">
      <header className="App-header">
        App
      </header>
    </div>
  );
}

export default App;
