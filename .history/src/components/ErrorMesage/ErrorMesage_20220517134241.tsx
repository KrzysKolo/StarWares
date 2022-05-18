import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as ErrorMesagStyles } from './ErrorMesage.module.scss';

const style = bemCssModules(ErrorMesagStyles);

export type ErrorMesageProps = {
  message: string,
}

const ErrorMesage: React.FC<ErrorMesageProps> = ({ message }) => {
  return (
    <div className={style()}>{message}</div>
  )
}

export default ErrorMesage;