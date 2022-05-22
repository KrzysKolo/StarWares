import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as BoxSearchInputStyles } from './BoxSearchInput.module.scss';
import { string } from 'yup';
import SearchInput from '../SearchInput';
import SearchInputFocus from '../SearchInputFocus';

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
        ? (<SearchInputFocus placeholder='All' value={value} onChange={onChange} onFocus={onFocus} onBlur={onBlur} photo={photo} altPhoto={altPhoto} />)
        : (<SearchInput placeholder={infoText} value={value} onChange={onChange} onFocus={onFocus} onBlur={onBlur} photo={photo} altPhoto={altPhoto} />)

      }
    </div>
  )
}

export default BoxSearchInput;