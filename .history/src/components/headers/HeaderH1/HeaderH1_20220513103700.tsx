import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as HeaderH1Styles } from './StarWaresPage.module.scss';
import f from './../../../assets/svgs/letters/Vector.svg'
import r from './../../../assets/svgs/letters/Vector-1.svg'
import o from './../../../assets/svgs/letters/Vector-2.svg'
import n from './../../../assets/svgs/letters/Vector-3.svg'
import t from './../../../assets/svgs/letters/Vector-4.svg'
import char from './../../../assets/svgs/letters/Vector-5.svg'
import e from './../../../assets/svgs/letters/Vector-6.svg'
import en from './../../../assets/svgs/letters/Vector-7.svg'
import d from './../../../assets/svgs/letters/Vector-8.svg'

const style = bemCssModules(HeaderH1Styles);

function HeaderH1() {
  return (
    <div>
      <img src={f} alt="Recruitment task" />
      <img src={r} alt="Recruitment task" />
      <img src={o} alt="Recruitment task" />
      <img src={n} alt="Recruitment task" />
      <img src={t} alt="Recruitment task" />
      <img src={char} alt="Recruitment task" />
      <img src={e} alt="Recruitment task" />
      <img src={en} alt="Recruitment task" />
      <img src={d} alt="Recruitment task" />
    </div>
  );
}

export default HeaderH1;