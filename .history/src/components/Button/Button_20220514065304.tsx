import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as ButtonStyles } from './Button.module.scss';

const style = bemCssModules(ButtonStyles);

const Button = () => {
  return (
    <div className={style()}>Button</div>
  )
}

export default Button