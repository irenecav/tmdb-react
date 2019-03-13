import React from 'react';
import ShowMovies from '../components/ShowMovies';

const Collection = ({ match }) => {
  const {
    params: { id }
  } = match;

  return <ShowMovies collection={id} />;
};

export default Collection;
