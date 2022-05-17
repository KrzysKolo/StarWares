import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as StarWaresPageStyles } from './StarWaresPage.module.scss';
import { Header, AddMovie, Footer, MovieList } from './../../components';

const style = bemCssModules(StarWaresPageStyles);

const StarWaresPage: React.FC = () => {
  return (
    <section className={style()}>
      <Header />
      <MovieList />
      <AddMovie />
      <Footer text="COPYRIGHT © 2019 MIRUMEE SOFTWARE" />
    </section>
  )
}

export default StarWaresPage;