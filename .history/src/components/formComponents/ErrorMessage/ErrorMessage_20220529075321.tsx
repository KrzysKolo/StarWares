import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as ErrorMessagStyles } from './ErrorMessage.module.scss';

const style = bemCssModules(ErrorMessagStyles);



const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className={style()}>{message}</div>
  )
}

export default ErrorMessage;