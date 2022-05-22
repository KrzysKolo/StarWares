import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as SearchInputFocusStyles } from './SearchInputFocus.module.scss';

const style = bemCssModules(SearchInputFocusStyles);

export type SearchInputFocusProps = {
  placeholder: string,
  photo?: string,
  altPhoto?: string,
  value: string,
  onChange: React.MouseEventHandler<HTMLElement> | any,
  onFocus?: () => void,
  onBlur?: () => void,
}

const SearchInputFocus: React.FC<SearchInputFocusProps> = ({ placeholder, value, onChange, onFocus, photo, altPhoto }) => {
  return (
    <div className={style()}>
      <input
        type='text'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
      />
     <img src={photo} alt={altPhoto} />
    </div>
  )
}

export default SearchInputFocus;