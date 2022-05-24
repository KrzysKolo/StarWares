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
      let tabPlanetInMyFilm: any = []; //tablica pomocnicza do której dodawane są całe planety po przefiltorwaniu po nazwie
      let planetsInMyMovie: [] | any = []; //tablica pomocnicza do której dodawane są planety jako tablice z obiektami z wymaganymi danymi
      planetsList.map(item => tabPlanetInMyFilm.push(planets.filter(planet => planet.name === item)));
      tabPlanetInMyFilm.map((item: any) =>
       planetsInMyMovie.push({
        name: item.name,
        diameter: item.diameter,
        rotation_period: item.rotation_period,
        orbital_period: item.orbital_period,
        gravity: item.gravity,
        population: item.population,
        climate: item.climate,
        terrain: item.terrain,
        surface_water: item.surface_water,
        url: item.url,
        created: item.created,
        edited: item.edited,
      }))
    );
    const planetsTab = []; //tablica, która przechowuje planety w postaci obiektów
    for (const key in planetsInMyMovie) {
      planetsTab.push({...planetsInMyMovie[key], id: key })
    }
      let MyMovie = {
        title: titleMovie,
        planets: planetsTab,
        id: Date.now()+planetsInMyMovie.length,
      }
      console.log(MyMovie);
      console.log(tabPlanetInMyFilm);
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


