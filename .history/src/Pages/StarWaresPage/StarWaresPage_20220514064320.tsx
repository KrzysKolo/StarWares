import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as StarWaresPageStyles } from './StarWaresPage.module.scss';
import { Header } from './../../components';

const style = bemCssModules(StarWaresPageStyles);

const StarWaresPage: React.FC = () => {
  return (
    <section className={style()}>
      <Header />
    </section>
  )
}

export default StarWaresPage;