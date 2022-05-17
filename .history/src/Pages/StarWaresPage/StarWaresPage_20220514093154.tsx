import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as StarWaresPageStyles } from './StarWaresPage.module.scss';
import { Header, PrimaryButton, Footer } from './../../components';
import { handleShowFormToAddFilm } from '../../assets/function/addFilm';

const style = bemCssModules(StarWaresPageStyles);

const StarWaresPage: React.FC = () => {
  return (
    <section className={style()}>
      <Header />
      <PrimaryButton title="Add movie" variant='primary' onClick={handleShowFormToAddFilm} />
      <Footer text="COPYRIGHT © 2019 MIRUMEE SOFTWARE" />
    </section>
  )
}

export default StarWaresPage;