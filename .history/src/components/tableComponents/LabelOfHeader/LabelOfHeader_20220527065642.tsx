import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as LabelOfHeaderStyles } from './LabelOfHeader.module.scss';

const style = bemCssModules(LabelOfHeaderStyles)

export type LabelOfHeaderProps = {
  text: string;
}

const LabelOfHeader: React.FC = ({ text }) => {
  return (
    <div className={style()}>
      <h2>{text}</h2>
      <div>
        strzałki
      </div>
    </div>
  )
}

export default LabelOfHeader;