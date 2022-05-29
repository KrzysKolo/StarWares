import React, { useState } from 'react';
//CSS
import { default as bemCssModules } from 'bem-css-modules';
import { default as BoxMovieStyles } from './BoxMovie.module.scss'
//API
//REDUX
//COMPONENTS
import { PrimaryButton } from '../buttons';
import {  TableInfoPlanets }  from '../../components';
//MODELS
//FILES

const style = bemCssModules(BoxMovieStyles);

export type BoxMovieProps = {
  item: any;
}

const BoxMovie: React.FC<BoxMovieProps> = ({ item }) => {
  const [variantButton, setVariantButton] = useState<boolean>(true);
  const [isShowInfoPlanets, setIsShowInfoPlanets] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleShowTableWithPlanets = (e: string) => {
    setVariantButton(!variantButton);
    setIsShowInfoPlanets(!isShowInfoPlanets);
    setIsLoading(!isLoading);
  }

  return (
    <div className={style()}>
      <PrimaryButton
        title={item.title}
        primary={variantButton}
        onClick={() => handleShowTableWithPlanets(`${item.title}`)}
      />
      { isShowInfoPlanets &&
        <TableInfoPlanets
          text={item.title}
          item={item}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      }
    </div>
  )
}

export default BoxMovie