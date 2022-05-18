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


  const [titleMovie, setTitleMovie] = useState<string>("");
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [searchText, setSearchText] = useState<string>('');
  const [sugestion, setSugestion] = useState<Planet[]>([]);
  const [planetsList, setPlanetsList] = useState<string[]>([]);
  const [isError, setIsError] = useState<boolean>(false);


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
        console.log(planets.data.results);
        setPlanets(planets.data.results)
        dispatch(getPlanetsApi(planets.data.results));
      }
      catch {
        console.log("error")
      }
    };
    getPalents()
  }, []);

  const handleChangePlanets = (text: React.SetStateAction<string>) => {
    let matches: Planet[];
    if (searchText.length > 0) {
      matches = planets.filter(planet => {
        const regex = new RegExp(`${searchText}`, "gi");
        return planet.name.match(regex)
      })
      console.log('matches', matches)
      setSugestion(matches);
      setSearchText(text);
    }

  };
console.log(planets)
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
              <BoxSearchInput
                label="Add Planet"
                infoText='Search for the planet in database'
                onChange={(e: { target: { value: string | any; }; }) => handleChangePlanets(e.target.value)}
                value={searchText}
                photo={search}
                altPhoto="Search" />
            </div>
            { isError ? <SmallButtonReadonly title='Add movie' /> : <SmallButton title="Add movie" />}

          </form>
        </article>
        }
    </>
  )
}

export default FormAddMovie;