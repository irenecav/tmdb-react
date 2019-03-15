const API = 'https://api.themoviedb.org/3/';
const API_KEY = 'd5e09491256c520c89c7e51f889ccc98';
const MAIN_URL = API + 'discover/movie';
const SEARCH_URL = API + 'search/movie';
const MOVIE_URL = API + 'movie';

// para la portada
const getPopularMoviesURL = () => `${MAIN_URL}?api_key=${API_KEY}`;

const getSearchMoviesURL = query =>
  `${SEARCH_URL}?api_key=${API_KEY}&query=${query}`;

// Obtener las pelis
export const getMovies = async query => {
  const url =
    query == null || query === ''
      ? getPopularMoviesURL()
      : getSearchMoviesURL(query);
  try {
    const res = await fetch(url);
    const { results } = await res.json();
    return results;
  } catch (ex) {
    console.error('Error llamando a la API', ex);
    throw ex;
  }
};

const getDetail = async id => {
  const url = `${MOVIE_URL}/${id}?api_key=${API_KEY}`;
  const res = await fetch(url);
  return res.json();
};

const getCredits = async id => {
  const url = `${MOVIE_URL}/${id}/credits?api_key=${API_KEY}`;
  const res = await fetch(url);
  return res.json();
};

export const getMovieDetail = async id => {
  try {
    const data = await Promise.all([getDetail(id), getCredits(id)]);
    const [detail = {}, credits = {}] = data;
    const {crew, cast} = credits;

    return { ...detail, crew, cast };
  } catch (ex) {
    console.error('Error llamando a la API', ex);
    throw ex;
  }
};
