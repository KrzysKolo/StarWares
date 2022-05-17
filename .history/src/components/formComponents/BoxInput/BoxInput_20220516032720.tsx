import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as BoxInputStyles } from './BoxInput.module.scss';

const style = bemCssModules(BoxInputStyles);

export type BoxInputProps = {
  label: string | any,
  infoText: string | HTMLInputElement,
}

const BoxInput: React.FC = ({ label, infoText }) => {
  return (
    <div className={style()}>
      <label>{label}</label>
      <div>
        <input type='text' placeholder={infoText} />
      </div>

    </div>
  )
}

export default BoxInput;