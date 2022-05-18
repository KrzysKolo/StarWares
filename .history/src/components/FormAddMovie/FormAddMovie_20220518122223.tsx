import React, { useEffect, useState } from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as FormAddMovieStyles } from './FormAddMovie.module.scss';
import { useSelector } from 'react-redux';
import { stateWindowAddMovie } from '../../features/windows/windowsSlice';
import { BoxInput, BoxSearchInput } from '../formComponents';
import { SmallButton } from '../buttons';

import search from '../../assets/svgs/icons/Search.svg';
import { ErrorMessage } from '../'
import SmallButtonReadonly from '../buttons/SmallButtonReadonly';
import { getStarWaresPlanets } from '../../services/planets/planets';


const style = bemCssModules(FormAddMovieStyles);

const FormAddMovie: React.FC = () => {

  const _stateWindowAddMovie = useSelector(stateWindowAddMovie);
  const [titleMovie, setTitleMovie] = useState<string>("");
  const [searchLista, setSearchLista] = useState<string[]>([]);
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
  useEffect(() => {
    const getPalents = async () => {
      try {
        const planets = await getStarWaresPlanets();
        console.log(planets);
        return planets.data.results;
      }

    }
  })
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