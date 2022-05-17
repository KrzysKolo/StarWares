import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as ButtonStyles } from './Button.module.scss';

const style = bemCssModules(ButtonStyles);

export type ButtonProps = {
  title: string;
};

const Button: React.FC<ButtonProps> = ({title}) => {
  return (
    <button className={style()}>{title}</button>
  )
}

export default Button