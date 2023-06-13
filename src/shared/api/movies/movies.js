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

const getMovieGenres = async () => {
  const {
    data: { genres },
  } = await instance.get("/genre/movie/list");
  return genres.reduce((acc, currentValue) => {
    acc[currentValue.id] = currentValue.name;

    return acc;
  }, {});
};

const getTVGenres = async () => {
  const {
    data: { genres },
  } = await instance.get("/genre/tv/list");
  return genres.reduce((acc, currentValue) => {
    acc[currentValue.id] = currentValue.name;

    return acc;
  }, {});
};

export async function combineGenres() {
  const movieGenres = await getMovieGenres();
  // console.log("movieGenres", movieGenres);
  const tvGenres = await getTVGenres();
  // console.log("tvGenres", tvGenres);
  const genres = { ...movieGenres, ...tvGenres };
  // console.log("genres", genres);
  return genres;
}
