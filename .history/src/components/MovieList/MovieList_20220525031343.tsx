import React, { useEffect, useState } from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as MovieListStyles } from './MovieList.module.scss';
import { useLocalStorage } from '../../services/costomHooks/useLocalStorage';
import { useDispatch } from 'react-redux';
import { getPlanetsLocalStorage } from '../../features/filmsFromLocalStorage/filmsFromLocalStorageSlice';
import { PrimaryButton } from '../buttons';

const style = bemCssModules(MovieListStyles);
export type MovieListProps = {

};


const MovieList: React.FC = () => {
  const [variantButton, setVariantButton] = useState<boolean>(true);

  const handleShowFormToAddFilm = () => {
    console.log("sdsdsdsd");
    setVariantButton(!variantButton);
  }

  const [state ] = useState(JSON.parse(localStorage.getItem('MyMovies') || ''));
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(state)
    dispatch(getPlanetsLocalStorage(state));
  }, [state]);

console.log('aaa', state)
  return (
    <div className={style()}>
      {state.map((item: { title: string }, i: React.Key | null) => <div key={i}>
        <PrimaryButton title={item.title} primary={variantButton} onClick={handleShowFormToAddFilm} />
      </div>)}
    </div>
  )
}

export default MovieList;