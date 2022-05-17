import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as FormAddMovieStyles } from './FormAddMovie.module.scss';
import { useSelector } from 'react-redux';
import { stateWindowAddMovie } from '../../features/windows/windowsSlice';
import { BoxInput } from '../formComponents';

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
            <BoxInput label="Movie tittle" infoText='Please enter the tittle of the movie' photo="" altPhoto=""/>
          </form>
        </article>
        }
    </>
  )
}

export default FormAddMovie;