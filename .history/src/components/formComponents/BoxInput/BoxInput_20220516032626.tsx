import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as BoxInputStyles } from './BoxInput.module.scss';

const style = bemCssModules(BoxInputStyles);

export type BoxInputProps = {
  label: string | any,
  placeholder: string | HTMLInputElement,
}

const BoxInput: React.FC = ({ label, placeholder }) => {
  return (
    <div className={style()}>
      <label>{label}</label>
      <div>
        <input type='text' placeholder={placeholder} />
      </div>

    </div>
  )
}

export default BoxInput;