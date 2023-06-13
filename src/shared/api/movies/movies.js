import axios from "axios";

const API_KEY = "3c291d17985a5640676e8849c9a91fc7";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: API_KEY,
  },
});

export const getTrendingMovies = async (page, language) => {
  const { data } = await instance.get("/trending/movie/week", {
    params: {
      page,
      language,
    },
  });

  return data;
};

export const getMovieGenres = async () => {
  const data = await instance.get("/genre/movie/list");
  return data;
};
