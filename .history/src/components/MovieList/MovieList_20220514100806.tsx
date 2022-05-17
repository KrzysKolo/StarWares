import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as MovieListStyles } from './MovieList.module.scss';


const style = bemCssModules(MovieListStyles);

const MovieList: React.FC = () => {
  return (
    <div className={style()}>FilmList</div>
  )
}

export default MovieList;