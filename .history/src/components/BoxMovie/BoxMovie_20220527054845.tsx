import React, { useState } from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as BoxMovieStyles } from './BoxMovie.module.scss'
import { PrimaryButton } from '../buttons';
import {  TableInfoPlanets }  from '../../components';

const style = bemCssModules(BoxMovieStyles);

export type BoxMovieProps = {
  item: any;
}

const BoxMovie: React.FC<BoxMovieProps> = ({ item }) => {
  const [variantButton, setVariantButton] = useState<boolean>(true);
  const _stateWindowShowInfoPlanets = useSelector(stateWindowShowPlanets);

  const cos = (e: any) => {
    console.log(e)
    setVariantButton(!variantButton)
  }

  return (
    <div className={style()}>
      <PrimaryButton title={item.title} primary={variantButton} onClick={() => cos(`${item.title}`)} />
      <TableInfoPlanets text='Jakiś tekst' />
    </div>
  )
}

export default BoxMovie