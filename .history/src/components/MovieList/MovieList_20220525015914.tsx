import React, { useEffect } from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as MovieListStyles } from './MovieList.module.scss';
import { useLocalStorage } from '../../services/costomHooks/useLocalStorage';
import { useDispatch } from 'react-redux';
import { getPlanetsLocalStorage } from '../../features/filmsFromLocalStorage/filmsFromLocalStorageSlice';

const style = bemCssModules(MovieListStyles);
export type MovieListProps = {

};


const MovieList: React.FC = () => {
  const [state] = useLocalStorage("MyMovies", []);
  const dispatch = useDispatch();

  useEffect(() => {
    const aaa = localStorage.getItem("MyMovies");
    dispatch(getPlanetsLocalStorage(aaa));
  }, []);

console.log('aaa', state)
  return (
    <div className={style()}>

    </div>
  )
}

export default MovieList;