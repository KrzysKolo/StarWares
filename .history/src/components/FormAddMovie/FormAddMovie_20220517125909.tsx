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

export type FormAddMovieProps = {
  titleMovie: string,
};

const FormAddMovie: React.FC = () => {

  const _stateWindowAddMovie = useSelector(stateWindowAddMovie);
  const [titleMovie, setTitleMovie] = useState("");
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormAddMovieProps>();

  const handleSubmitToLocalStorage: SubmitHandler<FormAddMovieProps> = (data: FormAddMovieProps ) => {
    console.log('form data is', data);
    onchange((e: { target: { value: React.SetStateAction<string>; }; }) => setTitleMovie(e.target.value))
  }

  return (
    <>
      {_stateWindowAddMovie &&
        <article className={style()}>
          <form className={style('formAddMovie')} onSubmit={handleSubmit(handleSubmitToLocalStorage)}>
            <div>
              <BoxInput
                label="Movie tittle"
                infoText='Please enter the tittle of the movie'
                value={titleMovie}
                photo=""
                altPhoto=""
                {...register('titleMovie', { required: true})}
              />
              {
                errors.titleMovie && <div className={style('error')}>Error in your value</div>
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