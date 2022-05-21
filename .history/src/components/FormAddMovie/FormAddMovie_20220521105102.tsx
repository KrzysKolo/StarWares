import React, { useEffect, useState } from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as FormAddMovieStyles } from './FormAddMovie.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { stateWindowAddMovie } from '../../features/windows/windowsSlice';
import { BoxInput, BoxSearchInput } from '../formComponents';
import { SmallButton, SmallButtonReadonly } from '../buttons';

import search from '../../assets/svgs/icons/Search.svg';
import { ErrorMessage } from '../'
import { getStarWaresPlanets } from '../../services/planets/planets';
import { getAllPlanetsApi, getPlanetsApi } from '../../features/planets/planetsSlice';
import { Planet } from '../../models/Planet';


const style = bemCssModules(FormAddMovieStyles);

const FormAddMovie: React.FC = () => {

  const _stateWindowAddMovie = useSelector(stateWindowAddMovie);
  const planets = useSelector(getAllPlanetsApi)


  const [titleMovie, setTitleMovie] = useState<string>("");
  const [searchText, setSearchText] = useState<string>('');
  const [suggestions, setSuggestions] = useState<Planet[]>([]);
  const [planetsList, setPlanetsList] = useState<Planet[]>([]);
  const [isError, setIsError] = useState<boolean>(false);
  let TabMatches: Planet[] | any = [];


  const handleChangeValue = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setTitleMovie(e.target.value);
    if (titleMovie.length === 0) {
      setIsError(false);
    }
  };
  const handleSubmitToLocalStorage = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (titleMovie.charAt(0) !== titleMovie.charAt(0).toUpperCase()) {
      setIsError(!isError);
    }
    else {
      setTitleMovie("");
      console.log("zapisuje do localstorage");
    }
  };
  /* POBIERANIE PLANET */
  const dispatch = useDispatch();
  useEffect(() => {
    const getPalents = async () => {
      try {
        const planets = await getStarWaresPlanets();
        dispatch(getPlanetsApi(planets));
      }
      catch {
        console.log("error")
      }
    };
    getPalents()
  }, []);

  useEffect(() => {
    let planet: Planet[];
    if (searchText.length > 0) {
      planet = planets.filter(item =>
        item.name === searchText
      )
      console.log(planet)
      TabMatches.push([...TabMatches, planet]);
      setPlanetsList(TabMatches)
    }
  }, [searchText])

  const handleChangePlanets = (e: { target: { value: string | any; }; }) => {
    const value = e.target.value;
    let matches: Planet[];
    if (value.length > 0) {
      matches = planets.filter(planet => {
        const regex = new RegExp(`^${value}`, 'gi');
        return planet.name.match(regex)
      });
      setSuggestions(matches);
    }
    setSearchText(value);
   };
  const suggestionSelected = (value: React.SetStateAction<string | any>) => {
    setSearchText(value);
    setSuggestions([])
  };
  console.log(planetsList)
  console.log(suggestions)
  return (
    <>
      {_stateWindowAddMovie &&
        <article className={style()}>
          <form className={style('formAddMovie')} onSubmit={handleSubmitToLocalStorage}>
            <div>
              <BoxInput
                label="Movie tittle"
                infoText='Please enter the tittle of the movie'
                value={titleMovie}
                onChange={handleChangeValue}
                isErrorTitle={isError}
                photo=""
                altPhoto=""
              />
              {
                isError && <ErrorMessage message="Movie tittle name must start with a capital letter." />
              }
              {
                planetsList && planetsList.map(item => <div>{item.name}</div>)
              }

              <BoxSearchInput
                label="Add Planet"
                infoText='Search for the planet in database'
                onChange={handleChangePlanets}
                value={searchText}
                photo={search}
                altPhoto="Search" />
            </div>
            <ul className="suggestion-wrapper">
              {suggestions
                && suggestions.map((item, i) => <li className="suggestion" key={i} onClick={() => suggestionSelected(item.name)}>{item.name}</li>)}
            </ul>
            { isError ? <SmallButtonReadonly title='Add movie' /> : <SmallButton title="Add movie" />}

          </form>
        </article>
        }
    </>
  )
}

export default FormAddMovie;