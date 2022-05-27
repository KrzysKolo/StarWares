import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as BoxMovieStyles } from './BoxMovie.module.scss'
import { PrimaryButton } from '../buttons';

const style = bemCssModules(BoxMovieStyles);

export type BoxMovieProps = {
  item: any;
  handleClick: () => void
}

const BoxMovie: React.FC<BoxMovieProps> = ({ item }) => {
  const handleClick = () => {
    console.log("klik")
  }
  return (
    <div className={style()}>
      <PrimaryButton title={item.title} primary={true} onClick={handleClick} />
    </div>
  )
}

export default BoxMovie