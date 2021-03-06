import React from 'react';
//CSS
import { default as bemCssModules } from 'bem-css-modules';
import { default as LabelOfHeaderStyles } from './LabelOfHeader.module.scss';
//MODELS
import { LabelOfHeaderProps } from '../../../models/LabelOfHeaderProps';
//FILES
import arrowUpSmall from '../../../assets/images/ArrowUpSmall.png';
import arrowDownSmall from '../../../assets/images/ArrowDownSmall.png';

const style = bemCssModules(LabelOfHeaderStyles)

const LabelOfHeader: React.FC<LabelOfHeaderProps> = ({ title }) => {
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

export default LabelOfHeader;