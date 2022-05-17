import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as BoxInputStyles } from './BoxInput.module.scss';

const style = bemCssModules(BoxInputStyles);

export type BoxInputProps = {
  title: string | HTMLInputElement,
  placeholder: string | HTMLInputElement,
  image?: string | HTMLInputElement,
}

const BoxInput: React.FC = ({ title, placeholder, image}) => {
  return (
    <div className={style()}>
      <label>{title}</label>
      <input type='text' placeholder={placeholder} image={placeholder}
    </div>
  )
}

export default BoxInput;