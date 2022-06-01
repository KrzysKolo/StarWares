import React from 'react';
//CSS
import { default as bemCssModules } from 'bem-css-modules';
import { default as HeaderStyles } from './Header.module.scss';
//COMPONENTS
import { HeaderH1, HeaderH2 } from '../headers';
//FILES
import frontEnd from '../../assets/images/front-end.png';

const style = bemCssModules(HeaderStyles);

const Header: React.FC = () => {
  return (
    <header className={style()}>
      <div className={style('computer')}>
        <HeaderH1 />
        <HeaderH2 />
      </div>
      <div className={style('smartphone')}>
        <img src={frontEnd} alt="front End" />
      </div>
    </header>
  )
}

export default Header;
