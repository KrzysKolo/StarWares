import React, { useState } from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as FormAddMovieStyles } from './FormAddMovie.module.scss';
import { useSelector } from 'react-redux';
import { stateWindowAddMovie } from '../../features/windows/windowsSlice';
import { BoxInput, BoxSearchInput } from '../formComponents';
import { SmallButton } from '../buttons';
import search from '../../assets/svgs/icons/Search.svg';

const style = bemCssModules(FormAddMovieStyles);

export type FormAddMovieProps = {

};
const FormAddMovie: React.FC<FormAddMovieProps> = () => {

  const _stateWindowAddMovie = useSelector(stateWindowAddMovie);
  const [value, setValue] = useState<string>("")

  const handleSubbmitToLocalStorage = () => {
    console.log("zapisz do localStorage");
    console.log(value)
  }
  return (
    <>
      {_stateWindowAddMovie &&
        <article className={style()}>
          <form className={style('formAddMovie')} onSubmit={handleSubbmitToLocalStorage}>
            <div>
              <BoxInput
                label="Movie tittle"
                infoText='Please enter the tittle of the movie'
                value={value}
                photo=""
                altPhoto="" />
              <BoxSearchInput label="Add Planet" infoText='Search for the planet in database' photo={search} altPhoto="Search" />
            </div>
            <SmallButton title="Add movie" />
          </form>
        </article>
        }
    </>
  )
}

export default FormAddMovie;