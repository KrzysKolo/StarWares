import React, { useState } from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as FormAddMovieStyles } from './FormAddMovie.module.scss';
import { useSelector } from 'react-redux';
import { SubmitHandler, useForm } from 'react-hook-form';
import { stateWindowAddMovie } from '../../features/windows/windowsSlice';
import { BoxInput, BoxSearchInput } from '../formComponents';
import { SmallButton } from '../buttons';
import search from '../../assets/svgs/icons/Search.svg';
import { boolean } from 'yup';

const style = bemCssModules(FormAddMovieStyles);

const FormAddMovie: React.FC = () => {

  const _stateWindowAddMovie = useSelector(stateWindowAddMovie);
  const [titleMovie, setTitleMovie] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);

  const handleSubmitToLocalStorage = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (titleMovie.charAt(0) !== titleMovie.charAt(0).toUpperCase()) {
      setIsError(!isError);
    }
    else {

      console.log("zapisuje do localstorage")
    }
  }

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
                onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setTitleMovie(e.target.value)}
                photo=""
                altPhoto=""
              />
              {
                isError && <div>Tytul musi zaczynac się z wielkiej litery</div>
              }
              <BoxSearchInput
                label="Add Planet"
                infoText='Search for the planet in database'
                photo={search}
                altPhoto="Search" />
            </div>
            <SmallButton title="Add movie" />
          </form>
        </article>
        }
    </>
  )
}

export default FormAddMovie;