import React from 'react';
//CSS
import { default as bemCssModules } from 'bem-css-modules';
import { default as FooterStyles } from './Footer.module.scss';
//MODELS
import { FooterProps } from '../../models/FooterProps';

const style = bemCssModules(FooterStyles);

const Footer: React.FC<FooterProps> = ({ text }) => {

  return (
    <footer className={style()}>
      <h3> {text} </h3>
    </footer>
  )
}

export default Footer;