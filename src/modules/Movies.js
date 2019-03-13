import React from 'react';
import ShowMovies from '../components/ShowMovies';

const Movies = ({ location }) => {
  const { search } = location;
  const params = new URLSearchParams(search);
  const query = params.get('search');

  return <ShowMovies query={query} />;
};

export default Movies;
