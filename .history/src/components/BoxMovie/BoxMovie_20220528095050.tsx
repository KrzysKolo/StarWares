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
  const [isShowInfoPlanets, setIsShowInfoPlanets] = useState<boolean>(false);

  const handleShowTableWithPlanets = (e: string) => {
    console.log(e)
    setVariantButton(!variantButton);
    setIsShowInfoPlanets(!isShowInfoPlanets)
  }
  console.log(item.id)
  return (
    <div className={style()}>
      <PrimaryButton title={item.title} primary={variantButton} onClick={() => handleShowTableWithPlanets(`${item.title}`)} />
      { isShowInfoPlanets &&
        <TableInfoPlanets text={item.title} item={item} />
      }
    </div>
  )
}

export default BoxMovie