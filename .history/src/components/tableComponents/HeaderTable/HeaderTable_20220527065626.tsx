import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as HeaderTableStyles } from './HeaderTable.module.scss';
import LabelOfHeader from '../LabelOfHeader';

const style = bemCssModules(HeaderTableStyles);


const HeaderTable: React.FC = () => {
  return (
    <header className={style()}>
      <LabelOfHeader text='Planet Name' />
      <LabelOfHeader title='Rotation period' />
      <LabelOfHeader title='Orbital period' />
      <LabelOfHeader title='Diameter' />
      <LabelOfHeader title='Climate' />
      <LabelOfHeader title='Surface water' />
      <LabelOfHeader title='Population' />
    </header>
  )
}

export default HeaderTable;