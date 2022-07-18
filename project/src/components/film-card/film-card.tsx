type FilmCardProps = {
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
};

function FilmCard({ film }: { film: FilmCardProps }): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={film.img} alt={film.title} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">
          {film.title}
        </a>
      </h3>
    </article>
  );
}

export default FilmCard;
