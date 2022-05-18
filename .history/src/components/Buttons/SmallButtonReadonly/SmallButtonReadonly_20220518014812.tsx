import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as SmallButtonReadonlyStyles } from './SmallButtonReadonly.module.scss';
import { SmallButtonProps } from '../../../models/SmallButtonProps';

const style = bemCssModules(SmallButtonReadonlyStyles);

const SmallButtonReadonly: React.FC<SmallButtonProps> = ({ title}) =>  {

  return (
   <button disabled className={style()} >{title}</button>
   )
}

export default SmallButtonReadonly;