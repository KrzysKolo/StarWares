import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as AddMovieStyles } from './AddMovie.module.scss';

const style = bemCssModules(AddMovieStyles);

const AddMovie = () => {
  return (
    <div className={style()}>AddMovie</div>
  )
}

export default AddMovie;