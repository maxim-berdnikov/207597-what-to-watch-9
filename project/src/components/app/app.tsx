import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import Film from '../film/film';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import PageNotFound from '../page-not-found/page-not-found';
// import PrivateRoute from '../private-route/private-route';

type AppProps = {
  title: string;
  genre: string;
  year: number;
  films: {
    id: number;
    title: string;
    genre: string;
    year: number;
    rating: string;
    score: number;
    votes: number;
    desc: string;
    director: string;
    actors: string;
    img: string;
    video: string;
  }[];
};

function App({ title, genre, year, films }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main title={title} genre={genre} year={year} />}
        />
        <Route path={AppRoute.SignIn} element={<SignIn />} />
        <Route
          path={AppRoute.MyList}
          element={
            // <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
            <MyList films={films} />
            // </PrivateRoute>
          }
        />
        <Route path={AppRoute.Film} element={<Film />} />
        <Route path={AppRoute.AddReview} element={<AddReview />} />
        <Route path={AppRoute.Player} element={<Player />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
