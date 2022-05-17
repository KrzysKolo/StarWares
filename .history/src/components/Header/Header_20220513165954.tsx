import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as HeaderStyles } from './Header.module.scss';
import { HeaderH1 } from '../headers';


const style = bemCssModules(HeaderStyles);

const Header = () => {
  return (
    <header className={style()}>
      <HeaderH1 />

    </header>
  )
}

export default Header;
