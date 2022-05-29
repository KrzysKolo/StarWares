import React from 'react';
//CSS
import { default as bemCssModules } from 'bem-css-modules';
import { default as HeaderTableStyles } from './HeaderTable.module.scss';
//COMPONENTS
import { LabelOfHeader, LabelOfHeaderLoading } from '../';
//MODELS
import { HeaderTableProps } from '../../../models/HeaderTableProps';

const style = bemCssModules(HeaderTableStyles);

const HeaderTable: React.FC<HeaderTableProps> = ({ isLoading }) => {
  return (
    <header className={style()}>
      { isLoading
        ? (<LabelOfHeader title='Planet Name' />)
        : (<LabelOfHeaderLoading title='Planet Name' />)
      }
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