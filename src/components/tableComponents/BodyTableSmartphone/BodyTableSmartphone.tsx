import React from 'react';
//CSS
import { default as bemCssModules } from 'bem-css-modules';
import { default as BodyTableSmartphoneStyles } from './BodyTableSmartphone.module.scss';
//COMPONENTS
import ColumnInTable from '../ColumnInTable';
//MODELS
import { BodyTableProps } from '../../../models/BodyTableProps';

const style = bemCssModules(BodyTableSmartphoneStyles);

const BodyTableSmartphone: React.FC<BodyTableProps> = ({ film }) => {

  const { planets } = film[0];

  return (
    <table className={style()}>
      { planets.map((item: any) => <ColumnInTable key={item.name} item={item} />)}
    </table>
  )
}

export default BodyTableSmartphone;