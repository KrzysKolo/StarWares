import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as AddMovieStyles } from './AddMovie.module.scss';
import { PrimaryButton } from '../buttons';
import { handleShowFormToAddFilm } from '../../assets/function/addFilm';

const style = bemCssModules(AddMovieStyles);

const AddMovie = () => {
  return (
    <div className={style()}>
      <PrimaryButton title="Add movie" variant='primary' onClick={handleShowFormToAddFilm} />
    </div>
  )
}

export default AddMovie;