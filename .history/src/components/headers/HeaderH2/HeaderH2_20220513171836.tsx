import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as HeaderH2Styles } from './HeaderH2.module.scss';
import title from './../../../assets/svgs/title';


const style = bemCssModules(HeaderH2Styles);

function HeaderH2() {
  return (
    <div className={style()}>
      <img src={title} alt="Recruitment task" />
    </div>
  );
}

export default HeaderH2;