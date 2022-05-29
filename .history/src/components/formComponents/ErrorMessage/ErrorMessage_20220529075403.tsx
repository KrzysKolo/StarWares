import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as ErrorMessageStyles } from './ErrorMessage.module.scss';
import { ErrorMessageProps } from '../../../models/ErrorMessageProps';

const style = bemCssModules(ErrorMessageStyles);

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className={style()}>{message}</div>
  )
}

export default ErrorMessage;