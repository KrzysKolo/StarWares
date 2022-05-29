import React from 'react';
//CSS
import { default as bemCssModules } from 'bem-css-modules';
import { default as HeaderInTableStyles } from './HeaderInTable.module.scss';
//COMPONENTS
import LabelOfHeader from '../LabelOfHeader';
import LabelOfHeaderLoading from '../LabelOfHeaderLoading';
//MODELS
import { HeaderTableProps } from '../../../models/HeaderTableProps';

const style = bemCssModules(HeaderInTableStyles);

const HeaderInTable: React.FC<HeaderTableProps> = ({ isLoading }) => {
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

export default HeaderInTable