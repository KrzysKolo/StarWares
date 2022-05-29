import React from 'react';
//CSS
import { default as bemCssModules } from 'bem-css-modules';
import { default as HeaderH2Styles } from './HeaderH2.module.scss';
//FILES
import title from './../../../assets/svgs/title.svg';

const style = bemCssModules(HeaderH2Styles);

function HeaderH2() {
  return (
    <div className={style()}>
      <img src={title} alt="Recruitment task" />
    </div>
  );
}

export default HeaderH2;