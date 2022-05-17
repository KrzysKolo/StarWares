import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as HeaderH1Styles } from './HeaderH1.module.scss';
import f from './../../../assets/svgs/letters/Vector.svg';
import r from './../../../assets/svgs/letters/Vector-1.svg';
import o from './../../../assets/svgs/letters/Vector-2.svg';
import n from './../../../assets/svgs/letters/Vector-3.svg';
import t from './../../../assets/svgs/letters/Vector-4.svg';
import char from './../../../assets/svgs/letters/Vector-5.svg';
import e from './../../../assets/svgs/letters/Vector-6.svg';
import en from './../../../assets/svgs/letters/Vector-7.svg';
import d from './../../../assets/svgs/letters/Vector-8.svg';

const style = bemCssModules(HeaderH1Styles);

function HeaderH1() {
  return (
    <div className={style()}>
      <img className={style('letters')} src={f} alt="Recruitment task" />
      <img className={style('letters-1')} src={r} alt="Recruitment task" />
      <img className={style('letters-1')} src={o} alt="Recruitment task" />
      <img className={style('letters-1')} src={n} alt="Recruitment task" />
      <img className={style('letters-1')} src={t} alt="Recruitment task" />
      <img className={style('letters-1')} src={char} alt="Recruitment task" />
      <img className={style('letters-2')} src={e} alt="Recruitment task" />
      <img className={style('letters-2')} src={en} alt="Recruitment task" />
      <img className={style('letters-2')} src={d} alt="Recruitment task" />
    </div>
  );
}

export default HeaderH1;