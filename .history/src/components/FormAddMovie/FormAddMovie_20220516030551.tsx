import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as FormAddMovieStyles } from './FormAddMovie.module.scss';
import { useSelector } from 'react-redux';
import { stateWindowAddMovie } from '../../features/windows/windowsSlice';

const style = bemCssModules(FormAddMovieStyles);

export type FormAddMovieProps = {

};
const FormAddMovie: React.FC<FormAddMovieProps> = ({ }) => {

  const _stateWindowAddMovie = useSelector(stateWindowAddMovie);

  return (
    <>
      {_stateWindowAddMovie &&
        <article className={style()}>
          <form>

          </form>
        </article>
        }
    </>
  )
}

export default FormAddMovie;