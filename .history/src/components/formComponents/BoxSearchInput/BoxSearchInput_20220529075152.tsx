import React from 'react';
//CSS
import { default as bemCssModules } from 'bem-css-modules';
import { default as BoxSearchInputStyles } from './BoxSearchInput.module.scss';
//MODELS
import { BoxSearchInputProps } from '../../../models/BoxSearchInputProps';

const style = bemCssModules(BoxSearchInputStyles);

const BoxSearchInput: React.FC<BoxSearchInputProps> = (
  {
  label,
  infoText,
  photo,
  altPhoto,
  value,
  onChange,
  onFocus,
  onBlur,
  isFocus
  }) => {

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