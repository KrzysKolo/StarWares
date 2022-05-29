import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as BodyTableStyles } from './BodyTable.module.scss';

const style = bemCssModules(BodyTableStyles);

export type BodyTableProps = {
  film: any;
}
const BodyTable: React.FC<BodyTableProps> = ({film}) => {
  return (
    <table className={style()}>

     </table>
  )
}

export default BodyTable;