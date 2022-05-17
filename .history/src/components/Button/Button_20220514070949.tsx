import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as ButtonStyles } from './Button.module.scss';

const style = bemCssModules(ButtonStyles);

export type ButtonProps = {
  title: string;
};

const Button = ({title}) => {
  return (
    <button className={style()}>Button</button>
  )
}

export default Button