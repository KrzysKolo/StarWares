import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as BoxMovieStyles } from './BoxMovie.module.scss'
import { PrimaryButton } from '../buttons';

const style = bemCssModules(BoxMovieStyles);

export type BoxMovieProps = {
  item: any;
  onClick: () => void
}

const BoxMovie: React.FC<BoxMovieProps> = ({ item, onClick }) => {

  return (
    <div className={style()}>
      <PrimaryButton title={item.title} primary={true} onClick={onClick} />
    </div>
  )
}

export default BoxMovie