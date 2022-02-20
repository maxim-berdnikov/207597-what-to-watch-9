import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

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
    />
  </React.StrictMode>,
  document.getElementById('root'),
);
