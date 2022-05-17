import React, { InputHTMLAttributes, SetStateAction } from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as BoxInputStyles } from './BoxInput.module.scss';
import { BoxInputProps } from '../BoxSearchInput/BoxSearchInput';

const style = bemCssModules(BoxInputStyles);

const BoxInput: React.FC<BoxInputProps> = ({
  label,
  infoText,
  photo,
  altPhoto,
  value,
  onChange
}) => {

  return (
    <div className={style()}>
      <label>{label}</label>
      <div className={style('inputBox')}>
        <input
          type='text'
          placeholder={infoText}
          value={value}
          onChange={onChange}
        />
        <img src={photo} alt={altPhoto} />
      </div>

    </div>
  )
}

export default BoxInput;