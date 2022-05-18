import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as SmallButtonStyles } from './SmallButton.module.scss';
import { SmallButtonProps } from '../../../models/SmallButtonProps';

const style = bemCssModules(SmallButtonStyles);

const SmallButton: React.FC<SmallButtonProps> = ({ title, isErrorTitle }) => {
  console.log(isErrorTitle)
  return (
    <>
      { isErrorTitle
        ? (<button disabled className={style()}>{title}</button>)
        : (<button className={style()}>{title}</button>)
      }
    </>
  )
}

export default SmallButton;