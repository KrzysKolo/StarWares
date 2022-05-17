import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as HeaderStyles } from './Header.module.scss';
import { HeaderH1 } from '../headers';
import title from './../../assets/svgs/recruitment_task.svg'

const style = bemCssModules(HeaderStyles);

const Header = () => {
  return (
    <header className={style()}>
      <HeaderH1 />
      <img src={title} alt="Recruitment task" />
    </header>
  )
}

export default Header;
