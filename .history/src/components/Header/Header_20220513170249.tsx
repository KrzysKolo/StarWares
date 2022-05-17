import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as HeaderStyles } from './Header.module.scss';
import { HeaderH1, HeaderH2 } from '../headers';


const style = bemCssModules(HeaderStyles);

const Header = () => {
  return (
    <header className={style()}>
      <HeaderH1 />
      <HeaderH2 />
    </header>
  )
}

export default Header;
