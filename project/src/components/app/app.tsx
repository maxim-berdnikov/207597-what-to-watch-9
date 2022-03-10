import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import Film from '../film/film';

type AppProps = { title: string; genre: string; year: number };

function App({ title, genre, year }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main title={title} genre={genre} year={year} />}
        />
        <Route path={AppRoute.SignIn} element={<SignIn />} />
        <Route path={AppRoute.MyList} element={<MyList />} />
        <Route path={AppRoute.Film} element={<Film />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
