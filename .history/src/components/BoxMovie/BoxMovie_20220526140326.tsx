import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as BoxMovieStyles } from './BoxMovie.module.scss'

const style = bemCssModules(BoxMovieStyles);

export type BoxMovieProps = {
  item: [];
}

const BoxMovie: React.FC<BoxMovieProps> = ({ item }) => {
  return (
    <div className={style()}>
      BoxMovie
    </div>
  )
}

export default BoxMovie