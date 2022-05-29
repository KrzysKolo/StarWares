import React from 'react';
//CSS
import { default as bemCssModules } from 'bem-css-modules';
import { default as HeaderStyles } from './Header.module.scss';
//COMPONENTS
import { HeaderH1, HeaderH2 } from '../headers';

const style = bemCssModules(HeaderStyles);

const Header: React.FC = () => {
  return (
    <header className={style()}>
      <HeaderH1 />
      <HeaderH2 />
    </header>
  )
}

export default Header;
