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
  value: string,
};

const FormAddMovie: React.FC = () => {

  const _stateWindowAddMovie = useSelector(stateWindowAddMovie);
  const [value, setValue] = useState<string>("")
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormAddMovieProps>();

  const handleSubmitToLocalStorage: SubmitHandler<FormAddMovieProps> = (data: FormAddMovieProps ) => {
    console.log('form data is', data);
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

                photo=""
                altPhoto=""
                {...register('value', { required: true})}
              />
              {
                errors.value && <div className={style('error')}>Error in your value</div>
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