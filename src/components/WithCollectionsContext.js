import React from 'react';
import CollectionsContext from './CollectionsContext';
import { readCollections, writeCollections } from '../commons/localstorage';

class WithCollectionsContext extends React.Component {
  state = { collections: readCollections() };

  render() {
    return (
      <CollectionsContext.Provider
        value={{
          collections: this.state.collections,
          createCollection: this.createCollection,
          removeCollectionById: this.removeCollectionById,
          addMovieToCollection: this.addMovieToCollection,
          removeMovieFromCollection: this.removeMovieFromCollection,
          isMovieInCollection: this.isMovieInCollection
        }}
      >
        {this.props.children}
      </CollectionsContext.Provider>
    );
  }

  reloadCollections = () => {
    const collections = readCollections();
    this.setState({ collections });
  };

  updateCollections = collections => {
    if (
      JSON.stringify(collections) === JSON.stringify(this.state.collections)
    ) {
      console.log(
        'Intentando actualizar las colecciones innecesariamente',
        collections,
        this.state.collections
      );
      return;
    }
    writeCollections(collections);
    this.reloadCollections();
  };

  getCollectionById = collectionId =>
    this.state.collections.find(col => col.id == collectionId);

  createCollection = newCol => {
    const newCollections = [
      ...this.state.collections,
      { ...newCol, id: this.getNextCollectionId(), movies: [] }
    ];
    this.updateCollections(newCollections);
  };

  removeCollectionById = id => {
    const newCollections = this.state.collections.filter(col => col.id !== id);
    this.updateCollections(newCollections);
  };

  getNextCollectionId = () => {
    const ids = this.state.collections.map(col => col.id);
    if (ids.length < 1) return 0;

    return Math.max(...ids) + 1;
  };

  addMovieToCollection = (movie, collectionId) => {
    if (this.isMovieInCollection(movie.id, collectionId)) {
      const err = new Error('La película ya está en la colección');
      console.error(err);
    }

    const newCollections = this.state.collections.map(oldCol => {
      const col = { ...oldCol };
      if (col.id === collectionId) col.movies = [...col.movies, movie];

      return col;
    });

    this.updateCollections(newCollections);
  };

  removeMovieFromCollection = (movieId, collectionId) => {
    if (!this.isMovieInCollection(movieId, collectionId)) {
      const err = new Error(
        'Intentando borrar una película que no está en la colección'
      );
      console.error(err);
    }

    const newCollections = this.state.collections.map(oldCol => {
      const col = { ...oldCol };
      if (col.id == collectionId)
        col.movies = [...col.movies].filter(({ id }) => id !== movieId);

      return col;
    });

    this.updateCollections(newCollections);
  };

  isMovieInCollection = (movieId, collectionId) => {
    const { movies = [] } = this.getCollectionById(collectionId) || {};
    return movies.some(({ id }) => id == movieId);
  };
}

export default WithCollectionsContext;
