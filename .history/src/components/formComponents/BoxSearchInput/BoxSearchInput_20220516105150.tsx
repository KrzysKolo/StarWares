import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as BoxSearchInputStyles } from './BoxSearchInput.module.scss';

const style = bemCssModules(BoxInputStyles);

export type BoxInputProps = {
  label: string,
  infoText: string,
  photo?: string,
  altPhoto?: string,
}

const BoxSearchInput: React.FC<BoxInputProps> = ({ label, infoText, photo, altPhoto }) => {
  return (
    <div className={style()}>
      <label>{label}</label>
      <div className={style('inputBox')}>
        <input type='text' placeholder={infoText} />
        <img src={photo} alt={altPhoto} />
      </div>

    </div>
  )
}

export default BoxSearchInput;