import React from 'react';
//CSS
import { default as bemCssModules } from 'bem-css-modules';
import { default as BoxInputSmartphoneStyles } from './BoxInputSmartphone.module.scss';
//MODELS
import { BoxInputProps } from '../../../models/BoxInputProps';

const style = bemCssModules(BoxInputSmartphoneStyles);

const BoxInputSmartphone: React.FC<BoxInputProps> = ({
  label,
  infoText,
  photo,
  altPhoto,
  isErrorTitle,
  value,
  onChange
}) => {

  return (
    <div className={style()}>
      { isErrorTitle
        ? (<span className={style('error')}>{label}</span>)
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

export default BoxInputSmartphone;