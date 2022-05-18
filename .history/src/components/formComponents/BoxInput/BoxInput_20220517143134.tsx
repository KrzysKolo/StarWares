import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as BoxInputStyles } from './BoxInput.module.scss';
import { UseFormRegisterReturn } from 'react-hook-form';
import { boolean } from 'yup';

const style = bemCssModules(BoxInputStyles);

export type BoxInputProps = {
  label: string,
  infoText: string,
  photo?: string,
  altPhoto?: string,
  isErrorTitle: boolean,
  value: string,
  onChange: React.MouseEventHandler<HTMLElement> | any,
  }

const BoxInput: React.FC<BoxInputProps> = ({
  label,
  infoText,
  photo,
  altPhoto,
  isErrorTitle,
  value,
  onChange,
}) => {
console.log(isErrorTitle)
  return (
    <div className={style()}>
      { isErrorTitle
        ? (<label className={style('error')}>{label}</label>)
        : (<label>{label}</label>)
      }
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