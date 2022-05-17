import React, { useEffect, useState } from 'react';
import './App.css';
import { getStarWaresFilms } from './services/swapi/swapi';

function App() {

  const [film, setFilms] = useState([])


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
