import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as HeaderTableStyles } from './HeaderTable.module.scss';
import { LabelOfHeader } from '../';

const style = bemCssModules(HeaderTableStyles);
export type HeaderTableProps = {
  isLoading?: true;
}

const HeaderTable: React.FC = ( {isLoading}) => {
  return (
    <header className={style()}>
      { isLoading
        ? (<LabelOfHeader title='Planet Name' />);
        : (<LabelOfHeader title='Planet Name' isLoading={isLoading} />);
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