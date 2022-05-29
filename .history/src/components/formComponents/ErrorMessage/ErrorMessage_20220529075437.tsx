import React from 'react';
//CSS
import { default as bemCssModules } from 'bem-css-modules';
import { default as ErrorMessageStyles } from './ErrorMessage.module.scss';
//MODELS
import { ErrorMessageProps } from '../../../models/ErrorMessageProps';

const style = bemCssModules(ErrorMessageStyles);

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {

  return (
    <div className={style()}>{message}</div>
  )
}

export default ErrorMessage;