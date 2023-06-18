import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import MovieList from "../MovieList/MovieList";
import Pagination from "../Pagination/Pagination";
import Loader from "../HeaderSearch/Loader/Loader";

import {
  getTrendingMovies,
  combineGenres,
} from "../../shared/api/movies/movies";

const Movies = () => {
  const [items, setItems] = useState([]);
  const [genres, setGenres] = useState([]);
  const [language, setLanguage] = useState("en-US"); // "uk-UA"
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;
  const searchQuery = searchParams.get("query");

  useEffect(() => {
    const fetchAPI = async () => {
      setLoading(true);
      try {
        const { results, total_pages } = await getTrendingMovies(
          page,
          language
        );
        const genres = await combineGenres();
        setGenres(genres);
        setItems(results);
        setTotalPages(total_pages);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAPI();
  }, [page, language, setLanguage]);

  const onPageChange = (currentPage) => {
    if (page === currentPage) {
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });

    const params = searchQuery
      ? { query: searchQuery, page: currentPage }
      : { page: currentPage };
    setSearchParams(params);
  };

  return (
    <>
      {loading && <Loader />}
      {error && <p>Oops. Something goes wrong. Try again later.</p>}
      <MovieList items={items} genres={genres} />
      <Pagination
        currentPage={Number(page)}
        totalPagesCount={totalPages}
        onPageChange={(page) => onPageChange(page)}
      />
    </>
  );
};

export default Movies;
