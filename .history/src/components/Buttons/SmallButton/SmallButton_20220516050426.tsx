import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as SmallButtonStyles } from './SmallButton.module.scss';

const style = bemCssModules(SmallButtonStyles);

export type SmallButtonProps = {
  title: string,
}
const SmallButton = ({ title }) => {
  return (
    <button className={style()}>
      {title}
    </button>
  )
}

export default SmallButton;