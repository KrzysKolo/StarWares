import { useState } from 'react';
//CSS
import { default as bemCssModules } from 'bem-css-modules';
import { default as AddMovieStyles } from './AddMovie.module.scss';
//REDUX
import { useDispatch, useSelector } from 'react-redux';
import { changeVariantButton, isShowAddMovieChange, stateVariantButton, stateWindowAddMovie } from '../../features/windows/windowsSlice';
//COMPONENTS
import { PrimaryButton } from '../buttons';
//FILES
import dottLine from './../../assets/svgs/DottLine/DottLine.svg';

const style = bemCssModules(AddMovieStyles);

const AddMovie = () => {

  const _variantButton = useSelector(stateVariantButton);
  const _stateWindowAddMovie = useSelector(stateWindowAddMovie);
  const dispatch = useDispatch();

  const handleShowFormToAddFilm = () => {
    dispatch(changeVariantButton(!_variantButton));
    dispatch(isShowAddMovieChange(!_stateWindowAddMovie));
  }

  return (
    <div className={style()}>
      <img src={dottLine} alt="DottLine" />
      <div className={style('button')}>
        <PrimaryButton
          title="Add movie"
          primary={_variantButton}
          onClick={handleShowFormToAddFilm} />
      </div>
    </div>
  )
}

export default AddMovie;