import React from 'react';
//CSS
import { default as bemCssModules } from 'bem-css-modules';
import { default as StarWaresPageStyles } from './StarWaresPage.module.scss';
//COMPONENTS
import { Header, AddMovie, Footer, MovieList, FormAddMovie } from './../../components';

const style = bemCssModules(StarWaresPageStyles);

const StarWaresPage: React.FC = () => {

  return (
    <section className={style()}>
      <Header />
      <MovieList />
      <AddMovie />
      <FormAddMovie />
      <Footer text="COPYRIGHT © 2019 MIRUMEE SOFTWARE" />
    </section>
  )
}

export default StarWaresPage;