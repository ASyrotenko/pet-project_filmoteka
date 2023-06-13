import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import MovieList from "../MovieList/MovieList";
import Pagination from "../Pagination/Pagination";

import { getTrendingMovies } from "../../shared/api/movies/movies";

const Movies = () => {
  const [items, setItems] = useState([]);
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
        setItems(results);
        setTotalPages(total_pages);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAPI();
  }, [page, language]);

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
      <MovieList items={items} />
      <Pagination
        currentPage={Number(page)}
        totalPagesCount={totalPages}
        onPageChange={(page) => onPageChange(page)}
      />
    </>
  );
};

export default Movies;
