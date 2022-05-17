import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { starWars } from './features/films/filmsSlice';
import { getStarWaresFilms } from './services/swapi/swapi';

function App() {

  const [film, setFilms] = useState([])
  const dispatch = useDispatch();

  useEffect(() => {
  dispatch(starWars())
} [], )

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
