import React, { useEffect, useState } from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as MovieListStyles } from './MovieList.module.scss';
import { useLocalStorage } from '../../services/costomHooks/useLocalStorage';
import { useDispatch, useSelector } from 'react-redux';
import { getPlanetsLocalStorage } from '../../features/filmsFromLocalStorage/filmsFromLocalStorageSlice';
import { PrimaryButton } from '../buttons';
import { getFilmItems } from '../../features/films/filmsSlice';
import { AsyncThunkAction } from '@reduxjs/toolkit';

const style = bemCssModules(MovieListStyles);
export type MovieListProps = {
};


const MovieList: React.FC = () => {
  const [variantButton, setVariantButton] = useState<boolean>(true);
  const handleShowFormToAddFilm = (id: string | number) => {
    setVariantButton(!variantButton);
  }

  const [state] = useLocalStorage("MyMovies", []);
  const dispatch = useDispatch();
  const { filmsTab } = useSelector((store: any) => store.getFilmItems);

  useEffect(() => {
    if (filmsTab.length > 0) {
      console.log(filmsTab)
    }

  }, [filmsTab]);

  useEffect(() => {
    console.log(state)
    dispatch(getPlanetsLocalStorage(state));
  }, [state]);

console.log(filmsTab)

  return (
    <div className={style()}>
      {state.map((item: { title: string }, i: React.Key ) => <div key={i}>
        <PrimaryButton title={item.title} primary={variantButton} onClick={() => handleShowFormToAddFilm(`${ item.title }`)} />
      </div>)}
    </div>
  )
}

export default MovieList;