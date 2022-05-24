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
import { useLocalStorage } from '../../services/costomHooks/useLocalStorage';

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
  const [state, setState] = useLocalStorage("MyMovies",[] ) ;


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
      tabPlanetInMyFilm.forEach((item: any) => {
        const planet = {
          name: item[0].name,
          diameter: item[0].diameter,
          rotation_period: item[0].rotation_period,
          orbital_period: item[0].orbital_period,
          gravity: item[0].gravity,
          population: item[0].population,
          climate: item[0].climate,
          terrain: item[0].terrain,
          surface_water: item[0].surface_water,
          url: item[0].url,
          created: item[0].created,
          edited: item[0].edited,
        };
        planetsInMyMovie.push(planet)
      }
      );
    console.log(tabPlanetInMyFilm)
    const planetsTab = []; //tablica, która przechowuje planety w postaci obiektów
    for (const key in planetsInMyMovie) {
      planetsTab.push({...planetsInMyMovie[key] })
    }
      let MyMovie = {
        title: titleMovie,
        planets: planetsTab,
        id: Date.now()+planetsInMyMovie.length,
      }
      const PlanetsInMyMovie: any = [];
      PlanetsInMyMovie.push({ MyMovie })
      console.log(MyMovie);
      console.log(PlanetsInMyMovie)
      setState(PlanetsInMyMovie);
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


