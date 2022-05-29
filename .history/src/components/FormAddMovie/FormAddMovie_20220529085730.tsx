import React, { useEffect, useState } from 'react';
//CSS
import { default as bemCssModules } from 'bem-css-modules';
import { default as FormAddMovieStyles } from './FormAddMovie.module.scss';
//API
import { getStarWaresPlanets } from '../../services/planets/planets';
//REDUX
import { useDispatch, useSelector } from 'react-redux';
import { getAllPlanetsApi, getPlanetsApi } from '../../features/planets/planetsSlice';
import { stateWindowAddMovie } from '../../features/windows/windowsSlice';
//COMPONENTS
import { BoxInput, BoxSearchInput, PlanetsList, SuggestionsList, ErrorMessage } from '../formComponents';
import { SmallButton, SmallButtonReadonly } from '../buttons';
//MODELS
import { Planet } from '../../models/Planet';
//FILES
import search from '../../assets/svgs/icons/Search.svg';
import { useLocalStorage } from '../../services/customHooks/useLocalStorage';


const style = bemCssModules(FormAddMovieStyles);

const FormAddMovie: React.FC = () => {

  const _stateWindowAddMovie = useSelector(stateWindowAddMovie);
  const _planets = useSelector(getAllPlanetsApi)
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

  const addToLocalStorage = () => {
    let tabPlanetInMyFilm: any = []; //auxiliary table to which whole planets are added after filtering by name
    let planetsInMyMovie: [] | any = []; //auxiliary table to which planets are added as tables with objects with required data
    planetsList.map(item => tabPlanetInMyFilm.push(_planets.filter(planet => planet.name === item)));
    tabPlanetInMyFilm.forEach((item: any) => {
      const planet = {
        name: item[0].name,
        diameter: item[0].diameter,
        rotation_period: item[0].rotation_period,
        orbital_period: item[0].orbital_period,
        population: item[0].population,
        climate: item[0].climate,
        surface_water: item[0].surface_water,
      };
      planetsInMyMovie.push(planet)
    });
    const planetsTab = []; //an array that stores planets as objects
    for (const key in planetsInMyMovie) {
      planetsTab.push({...planetsInMyMovie[key] })
    }
    let MyMovie = {
      title: titleMovie,
      planets: planetsTab,
      id: Date.now()+planetsInMyMovie.length,
    }
    setState((prev: any) => [...state, MyMovie]);
    setTitleMovie("");
    setPlanetsList([]);
  };

  const handleSubmitToLocalStorage = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (titleMovie.charAt(0) !== titleMovie.charAt(0).toUpperCase()) {
      setIsError(!isError);
    }
    else {
      addToLocalStorage();
    }
  };
/* DOWNLOAD PLANET */
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
/* PLANET SEARCH */
  const handleChangePlanets = (e: { target: { value: string | any; }; }) => {
    const value = e.target.value;
    let matches: Planet[];
    if (value.length > 0) {
      matches = _planets.filter(planet => {
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
/* DELETING A PLANET FROM PLANETSLIST */
  const removeItemPlanetsList = (value: string) => {
    setPlanetsList([...planetsList.filter((item) => item !== value)]);
  };
/* FOCUS */
  const handleFocus = () => {
    setIsFocus(!isFocus);
  };

  return (
    <>
      { _stateWindowAddMovie &&
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
                isError &&
                  <ErrorMessage
                    message="Movie tittle name must start with a capital letter."
                  />
              }
              {
                planetsList &&
                  <PlanetsList
                    planetsList={planetsList}
                    remove={(value: string) => removeItemPlanetsList(value)}
                  />
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
            {isError
              ? (<SmallButtonReadonly title='Add movie' />)
              : (<SmallButton title="Add movie" />)
            }
          </form>
        </article>
        }
    </>
  )
}

export default FormAddMovie;


