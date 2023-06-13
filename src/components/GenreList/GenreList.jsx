import { Genres } from "./genreList.styled";

const GenreList = ({ genre_ids, genres }) => {
  const elements = (genre_ids ?? []).slice(0, 2).map((id) => genres[id]);
  if (genre_ids && genre_ids.length > 2) {
    elements.push("Other");
  }
  return <Genres>{elements.join(", ")}</Genres>;
};

export default GenreList;
