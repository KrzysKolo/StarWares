import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as HeaderTableStyles } from './HeaderTable.module.scss';
import LabelOfHeader from '../LabelOfHeader';

const style = bemCssModules(HeaderTableStyles);


const HeaderTable: React.FC = () => {
  return (
    <header className={style()}>
      <LabelOfHeader text='Planet Name' />
      <LabelOfHeader text='Rotation period' />
      <LabelOfHeader text='Orbital period' />
      <LabelOfHeader text='Diameter' />
      <LabelOfHeader text='Climate' />
      <LabelOfHeader text='Surface water' />
      <LabelOfHeader text='Population' />
    </header>
  )
}

export default HeaderTable;