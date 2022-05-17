import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as FooterStyles } from './Footer.module.scss';

const style = bemCssModules(FooterStyles);
export type FooterProps = {
  text: string,
}

const Footer: React.FC<FooterProps> = ({ text }) => {
  return (
    <footer className={style()}>
      <h3> {text} </h3>
    </footer>
  )
}

export default Footer;