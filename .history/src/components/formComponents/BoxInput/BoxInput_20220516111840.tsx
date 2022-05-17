import React, { SetStateAction } from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as BoxInputStyles } from './BoxInput.module.scss';

const style = bemCssModules(BoxInputStyles);

export type BoxInputProps = {
  label: string,
  infoText: string,
  value: string,
  photo?: string,
  altPhoto?: string,
  onChange: SetStateAction<string>,
}

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