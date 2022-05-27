import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as StarWaresPageStyles } from './StarWaresPage.module.scss';
import { Header, AddMovie, Footer, MovieList, FormAddMovie } from './../../components';
import { useSelector } from 'react-redux';

const style = bemCssModules(StarWaresPageStyles);

const StarWaresPage: React.FC = () => {
  const { filmsTab } = useSelector((store: any) => store.getFilmItems.filmsTab);
  console.log(filmsTab)
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