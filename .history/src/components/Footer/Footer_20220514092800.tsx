import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as FooterStyles } from './Footer.module.scss';

const style = bemCssModules(FooterStyles);

const Footer = () => {
  return (
    <footer>Footer</footer>
  )
}

export default Footer;