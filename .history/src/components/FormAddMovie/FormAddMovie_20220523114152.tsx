import React, { useEffect, useState } from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as FormAddMovieStyles } from './FormAddMovie.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { stateWindowAddMovie } from '../../features/windows/windowsSlice';
import { BoxInput, BoxSearchInput, PlanetsList } from '../formComponents';
import { SmallButton, SmallButtonReadonly } from '../buttons';

import search from '../../assets/svgs/icons/Search.svg';
import { ErrorMessage } from '../'
import { getStarWaresPlanets } from '../../services/planets/planets';
import { getAllPlanetsApi, getPlanetsApi } from '../../features/planets/planetsSlice';
import { Planet } from '../../models/Planet';
import SuggestionsList from '../formComponents/SuggestionsList';

const style = bemCssModules(FormAddMovieStyles);

const FormAddMovie: React.FC = () => {

  const _stateWindowAddMovie = useSelector(stateWindowAddMovie);
  const planets = useSelector(getAllPlanetsApi)
  const [titleMovie, setTitleMovie] = useState<string>("");
  const [searchText, setSearchText] = useState<string>('');
  const [suggestions, setSuggestions] = useState<Planet[]>([]);
  const [planetsList, setPlanetsList] = useState<string[]>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const tabPlanetInMyFilm: any = [];

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
      console.log(planetsList.map(item => tabPlanetInMyFilm.push(planets.filter(planet => planet.name === item))));
      console.log('filtrowanie')
      const MyMovie = {
        title: titleMovie,
        planetsInMyMovie: tabPlanetInMyFilm,
        planets: [tabPlanetInMyFilm.map((item: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; climate: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }, index: React.Key | null | undefined) => {
          (
            <div key={index}>
              <p >{item.name}</p>
              <p>{item.climate}</p>
            </div>
        )})]
      }
      console.log(MyMovie);
      setTitleMovie("");
      console.log("zapisuje do localstorage");
      setPlanetsList([]);
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
/* WYSZUKIWARKA PLANET */
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
    setPlanetsList(prev => [...planetsList, value]);
    setSearchText('');
    setSuggestions([])
  };
    /* USUWANIE PLANET Z PLANETSlIST */
  const removeItemPlanetsList = (value: string) => {
    setPlanetsList([...planetsList.filter((item) => item !== value)]);
  };
  /* FOCUS */
  const handleFocus = () => {
    setIsFocus(!isFocus);
  };

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
                planetsList && <PlanetsList planetsList={planetsList} remove={(value: string) => removeItemPlanetsList(value)} />
              }
              <BoxSearchInput
                label="Add Planet"
                infoText='Search for the planet in database'
                onChange={handleChangePlanets}
                value={searchText}
                onFocus={handleFocus}
                onBlur={handleFocus}
                isFocus={isFocus}
                photo={search}
                altPhoto="Search" />
              { searchText.length > 0
                ? (<SuggestionsList suggestions={suggestions} onClick={suggestionSelected} />)
                : (<div></div>)
              }
            </div>
            { isError ? <SmallButtonReadonly title='Add movie' /> : <SmallButton title="Add movie" />}
          </form>
        </article>
        }
    </>
  )
}

export default FormAddMovie;

