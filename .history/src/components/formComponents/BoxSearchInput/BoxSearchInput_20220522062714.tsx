import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as BoxSearchInputStyles } from './BoxSearchInput.module.scss';
import { string } from 'yup';
import SearchInput from '../SearchInput';

const style = bemCssModules(BoxSearchInputStyles);

export type BoxInputProps = {
  label: string,
  infoText: string,
  photo?: string,
  altPhoto?: string,
  value: string,
  isFocus: boolean,
  onChange: React.MouseEventHandler<HTMLElement> | any,
  onFocus?: () => void,
  onBlur?: () => void,
}

const BoxSearchInput: React.FC<BoxInputProps> = ({ label, infoText, photo, altPhoto, value, onChange, onFocus, onBlur, isFocus }) => {
  return (
    <div className={style()}>
      <label>{label}</label>
      { isFocus
        ? (<div className={style('inputBoxFocus')}>
            <input
              type='text'
              placeholder='All'
              value={value}
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              className={style(('inputFocus'))}
            />
            <img src={photo} alt={altPhoto} />
          </div>)
        : (<div className={style('inputBox')}>
            <input
              type='text'
              placeholder={infoText}
              value={value}
              onChange={onChange}
              onFocus={onFocus}
            />
            <img src={photo} alt={altPhoto} />
          </div>)
        }
     </div>
  )
}

export default BoxSearchInput;