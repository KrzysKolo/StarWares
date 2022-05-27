import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as LabelOfHeaderLoadingStyles } from './LabelOfHeaderLoading.module.scss';
import arrowUpSmall from '../../../assets/images/ArrowUpSmall.png';
import arrowDownSmall from '../../../assets/images/ArrowDownSmall.png';
import { boolean } from 'yup';

const style = bemCssModules(LabelOfHeaderLoadingStyles)

export type LabelOfHeaderLoadingProps = {
  title: string;
}

const LabelOfHeaderLoading: React.FC<LabelOfHeaderLoadingProps> = ({ title }) => {
  return (
    <div className={style()}>
      <h2>{title}</h2>
      <div>
        <img src={arrowUpSmall} alt="Arrow Up" />
        <img src={arrowDownSmall} alt="Arrow Down" />
      </div>
    </div>
  )
}

export default LabelOfHeaderLoading;