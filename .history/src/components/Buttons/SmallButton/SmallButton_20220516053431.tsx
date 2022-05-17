import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as SmallButtonStyles } from './SmallButton.module.scss';
import { SmallButtonProps } from '../../../models/SmallButtonProps';

const style = bemCssModules(SmallButtonStyles);

const SmallButton: React.FC<SmallButtonProps> = ({ title, type }) => {
  return (
    <button className={style()} type={type}>
      {title}
    </button>
  )
}

export default SmallButton;