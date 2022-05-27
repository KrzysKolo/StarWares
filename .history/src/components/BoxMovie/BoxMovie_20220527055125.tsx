import React, { useState } from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as BoxMovieStyles } from './BoxMovie.module.scss'
import { PrimaryButton } from '../buttons';
import {  TableInfoPlanets }  from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { isShowInfoPlanets, stateWindowShowPlanets } from '../../features/windows/windowsSlice';

const style = bemCssModules(BoxMovieStyles);

export type BoxMovieProps = {
  item: any;
}

const BoxMovie: React.FC<BoxMovieProps> = ({ item }) => {
  const [variantButton, setVariantButton] = useState<boolean>(true);
  const _stateWindowShowInfoPlanets = useSelector(stateWindowShowPlanets);
  const dispatch = useDispatch();

  const cos = (e: any) => {
    console.log(e)
    setVariantButton(!variantButton);
    dispatch(isShowInfoPlanets(!_stateWindowShowInfoPlanets));
  }

  return (
    <div className={style()}>
      <PrimaryButton title={item.title} primary={variantButton} onClick={() => cos(`${item.title}`)} />
      { _stateWindowShowInfoPlanets &&
        <TableInfoPlanets text='Jakiś tekst' />
      }
    </div>
  )
}

export default BoxMovie