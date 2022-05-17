import React, { useState } from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as AddMovieStyles } from './AddMovie.module.scss';
import { PrimaryButton } from '../buttons';
import { handleShowFormToAddFilm } from '../../assets/function/addFilm';
import dottLine from './../../assets/svgs/DottLine/DottLine.svg';

const style = bemCssModules(AddMovieStyles);

const AddMovie = () => {
  const [variantButton, setVariantButton] = useState<string>(true);

  const handleShowFormToAddFilm = () => {
    console.log("Add film");
    setVariantButton(!variantButton)
  }
  return (
    <div className={style()}>
      <img src={dottLine} alt="DottLine" />
      <div className={style('button')}>
        <PrimaryButton title="Add movie" primary={variantButton} onClick={handleShowFormToAddFilm} />
      </div>
    </div>
  )
}

export default AddMovie;