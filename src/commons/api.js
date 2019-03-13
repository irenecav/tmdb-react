const URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'd5e09491256c520c89c7e51f889ccc98';
const MAIN_URL = URL + 'discover/movie';

// para la portada
const getPopularMoviesURL = () => `${MAIN_URL}?api_key=${API_KEY}`;
const getSearchMoviesURL = query =>
  `${URL}search/movie?api_key=${API_KEY}&query=${query}`;

// Obtener las pelis
export const getMovies = async query => {
  const url = query == null ? getPopularMoviesURL() : getSearchMoviesURL(query);
  try {
    const res = await fetch(url);
    const { results } = await res.json();
    return results;
  } catch (ex) {
    console.error('Ups! ERROR:', ex);
    throw ex;
  }
};
