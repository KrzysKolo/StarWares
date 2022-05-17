import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as FilmListStyles } from './FilmList.module.scss';


const style = bemCssModules(FilmListStyles);

const FilmList = () => {
  return (
    <div>FilmList</div>
  )
}

export default FilmList