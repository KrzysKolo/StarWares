import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as BoxSearchInputStyles } from './BoxSearchInput.module.scss';
import { string } from 'yup';

const style = bemCssModules(BoxSearchInputStyles);

export type BoxInputProps = {
  label: string,
  infoText: string,
  photo?: string,
  altPhoto?: string,
  value: string,
  onChange: string,
}

const BoxSearchInput: React.FC<BoxInputProps> = ({ label, infoText, photo, altPhoto, value, onChange }) => {
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

export default BoxSearchInput;