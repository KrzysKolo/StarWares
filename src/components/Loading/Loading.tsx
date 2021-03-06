import React from 'react';
//CSS
import { default as bemCssModules } from 'bem-css-modules';
import { default as LoadingStyles } from './Loading.module.scss';
//FILES
import arrows from '../../assets/images/Arrows.png';

const style = bemCssModules(LoadingStyles);

function Loading() {

 return (
   <section className={style()}>
     <div className={style('arrows')}>
       <img src={arrows} alt="arrow" />
     </div>
    </section>
  );
}

export default Loading;