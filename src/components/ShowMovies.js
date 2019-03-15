import React from 'react';
import Movie from './Movie';

const ShowMovies = ({ peliculas = [] }) =>
  peliculas.length ? (
    peliculas.map(pelicula => <Movie {...pelicula} key={pelicula.id} />)
  ) : (
    <div>No results...</div>
  );

export default ShowMovies;
