import React from 'react';
//CSS
import { default as bemCssModules } from 'bem-css-modules';
import { default as LoadingStyles } from './Loading.module.scss';
//FILES
import arrowLeft from '../../assets/images/ArrowLeft.png';
import arrowRight from '../../assets/images/ArrowRight.png';

const style = bemCssModules(LoadingStyles);

function Loading() {

 return (
   <section className={style()}>
     <div>

     </div>
    </section>
  );
}

export default Loading;