import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as FormAddMovieStyles } from './FormAddMovie.module.scss';
import { useSelector } from 'react-redux';
import { stateWindowAddMovie } from '../../features/windows/windowsSlice';
import { BoxInput } from '../formComponents';
import search from '../../assets/svgs/icons/Search.svg';
import { SmallButton } from '../buttons';

const style = bemCssModules(FormAddMovieStyles);

export type FormAddMovieProps = {

};
const FormAddMovie: React.FC<FormAddMovieProps> = ({ }) => {

  const _stateWindowAddMovie = useSelector(stateWindowAddMovie);

  return (
    <>
      {_stateWindowAddMovie &&
        <article className={style()}>
          <form className={style('form')}>
            <div>
              <BoxInput label="Movie tittle" infoText='Please enter the tittle of the movie' photo="" altPhoto="" />
              <BoxInput label="Add Planet" infoText='Search for the planet in database' photo={search} altPhoto="Search" />
            </div>
            <SmallButton title="Add movie" type='submit' />
          </form>
        </article>
        }
    </>
  )
}

export default FormAddMovie;