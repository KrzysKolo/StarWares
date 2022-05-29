import React from 'react';
//CSS
import { default as bemCssModules } from 'bem-css-modules';
import { default as ErrorMessageTableStyles } from './ErrorMessageTable.module.scss'
//MODELS
import { ErrorMessageProps } from '../../../models/ErrorMessageProps';
//FILES
import error from '../../../assets/images/error2.png';

const style = bemCssModules(ErrorMessageTableStyles);

const ErrorMessageTable: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <section className={style()}>
      <div>
        <img src={error} alt="error" />
      </div>
      <h3>{message}</h3>
    </section>
  )
}

export default ErrorMessageTable;