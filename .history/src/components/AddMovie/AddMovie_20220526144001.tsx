import React, { useState } from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as AddMovieStyles } from './AddMovie.module.scss';
import { PrimaryButton } from '../buttons';
import dottLine from './../../assets/svgs/DottLine/DottLine.svg';
import { useDispatch, useSelector } from 'react-redux';
import { isShowAddMovieChange, stateWindowAddMovie } from '../../features/windows/windowsSlice';

const style = bemCssModules(AddMovieStyles);

const AddMovie = () => {

  const [variantButton, setVariantButton] = useState<boolean>(true);
  const _stateWindowAddMovie = useSelector(stateWindowAddMovie);
  const dispatch = useDispatch();

  const handleShowFormToAddFilm = () => {
    setVariantButton(!variantButton);
    dispatch(isShowAddMovieChange(!_stateWindowAddMovie));
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