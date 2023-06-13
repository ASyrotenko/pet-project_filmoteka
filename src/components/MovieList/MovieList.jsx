import { Link, useLocation } from "react-router-dom";

import GenreList from "../GenreList/GenreList";

import { List, Poster, Title, Splash, Year, Vote } from "./movieList.styled";

import { getFullYearFromDate } from "../../shared/helpers";
import defaultMoviePoster from "../../images/movies/default-movie-poster.jpg";

const MovieList = ({ items, genres }) => {
  const location = useLocation();

  const elements = items.map(
    ({ id, poster_path, title, release_date, vote_average, genre_ids }) => (
      <li key={id}>
        <Link state={{ from: location }} to={`/movies/${id}`}>
          <Poster
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/original/${poster_path}`
                : defaultMoviePoster
            }
            alt={title}
            loading="lazy"
            width="420"
            height="auto"
          />
          <Title>{title}</Title>
          <GenreList genre_ids={genre_ids} genres={genres} />
          <Splash> | </Splash>
          <Year>{getFullYearFromDate(release_date)}</Year>
          <Vote>{vote_average.toFixed(1)}</Vote>
        </Link>
      </li>
    )
  );
  return <List>{elements}</List>;
};

export default MovieList;
