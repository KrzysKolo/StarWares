import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as LabelOfHeaderStyles } from './LabelOfHeader.module.scss';

const style = bemCssModules(LabelOfHeaderStyles)

export type LabelOfHeaderProps = {
  title: string;
}

const LabelOfHeader: React.FC = ({ title }) => {
  return (
    <div className={style()}>
      <h2>{title}</h2>
      <div>
        strzałki
      </div>
    </div>
  )
}

export default LabelOfHeader;