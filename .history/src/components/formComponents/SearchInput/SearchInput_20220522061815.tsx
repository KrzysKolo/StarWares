import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as SearchInputStyles } from './SearchInput.module.scss';

const style = bemCssModules(SearchInputStyles);

export type SearchInputProps = {
  placeholder: string,
  photo?: string,
  altPhoto?: string,
  value: string,
  onChange: React.MouseEventHandler<HTMLElement> | any,
  onFocus?: () => void,
  onBlur?: () => void,
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder, value, onChange, onFocus, onBlur, photo, altPhoto }) => {
  return (
    <div className={style()}>
      <input
        type='text'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
     <img src={photo} alt={altPhoto} />
    </div>
  )
}

export default SearchInput;