import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as BoxInputStyles } from './BoxInput.module.scss';

const style = bemCssModules(BoxInputStyles);

export type BoxInputProps = {
  title: string | any,
  placeholder: string | HTMLInputElement,
  photo?: string | HTMLInputElement | any,
}

const BoxInput: React.FC = ({ title, placeholder, photo }) => {
  return (
    <div className={style()}>
      <label>{title}</label>
      <div>
        <input type='text' placeholder={placeholder} />
        <img src={photo} alt='search'/>
      </div>

    </div>
  )
}

export default BoxInput;