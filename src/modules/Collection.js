import React from 'react';
import ShowMovies from '../components/ShowMovies';
import CollectionsContext from '../components/CollectionsContext';

const Collection = ({ match }) => {
  const {
    params: { id }
  } = match;

  return (
    <CollectionsContext.Consumer>
      {({ collections }) => {
        const coleccion = collections.find(col => col.id == id) || {};
        const { movies = [] } = coleccion;
        return <ShowMovies peliculas={movies} />;
      }}
    </CollectionsContext.Consumer>
  );
};

export default Collection;
