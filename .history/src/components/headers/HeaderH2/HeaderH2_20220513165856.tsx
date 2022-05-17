import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as HeaderH2Styles } from './HeaderH2.module.scss';


const style = bemCssModules(HeaderH2Styles);

function HeaderH2() {
  return (
    <div className={style()}>

    </div>
  );
}

export default HeaderH2;