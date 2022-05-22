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
  isFocus: boolean,
  onChange: React.MouseEventHandler<HTMLElement> | any,
  onFocus?: React.EventHandler<any>,
}

const BoxSearchInput: React.FC<BoxInputProps> = ({ label, infoText, photo, altPhoto, value, onChange, onFocus, isFocus }) => {
  return (
    <div className={style()}>
      <label>{label}</label>
      <div className={style('inputBox')}>
        {isFocus
          ? (<input
            type='text'
            placeholder='All'
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            className={style(('inputFocus'))}
          />)
          : (
          <input
            type='text'
            placeholder={infoText}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
          />)
        }
        <img src={photo} alt={altPhoto} />
      </div>

    </div>
  )
}

export default BoxSearchInput;