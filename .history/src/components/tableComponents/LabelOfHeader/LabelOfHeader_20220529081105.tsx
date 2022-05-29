import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as LabelOfHeaderStyles } from './LabelOfHeader.module.scss';
import arrowUpSmall from '../../../assets/images/ArrowUpSmall.png';
import arrowDownSmall from '../../../assets/images/ArrowDownSmall.png';
import { LabelOfHeaderProps } from '../../../models/LabelOfHeaderProps';

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