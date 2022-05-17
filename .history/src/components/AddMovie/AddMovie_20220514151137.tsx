import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as AddMovieStyles } from './AddMovie.module.scss';
import { PrimaryButton } from '../buttons';
import { handleShowFormToAddFilm } from '../../assets/function/addFilm';
import dottLine from './../../assets/svgs/DottLine/DottLine.svg';

const style = bemCssModules(AddMovieStyles);

const AddMovie = () => {
  return (
    <div className={style()}>
      <img src={dottLine} alt="DottLine" />
      <div className={style('button')}>
        <PrimaryButton title="Add movie" variant='primary' onClick={handleShowFormToAddFilm} />
      </div>
    </div>
  )
}

export default AddMovie;