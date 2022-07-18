import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { FILMS } from './mocks/films';

const MainFilmInfo = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      title={MainFilmInfo.title}
      genre={MainFilmInfo.genre}
      year={MainFilmInfo.year}
      films={FILMS}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);
