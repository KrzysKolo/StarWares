import React, { useEffect, useState } from 'react';
import './App.css';
import { getStarWaresFilms } from './services/swapi/swapi';

function App() {

  const [film, setFilms] = useState([])

  useEffect(() => {
    getStarWaresFilms()
      .then((res) => {
        setFilms(res.data.results)
    })

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
