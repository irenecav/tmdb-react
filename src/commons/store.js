const store = {
  getCollections: () => [],
  getCollection: collectionId => {},
  createCollection: name => {},
  removeCollection: collectionId => {},
  updateCollection: newCollection => {},
  addMovie: (movieId, collectionId) => {},
  removeMovie: (movieId, collectionId) => {}
};

const readCollections = () => {
  try {
      const collectionsStr = window.localStorage.getItem("collections") || ''
    return JSON.parse(collectionsStr);
  } catch (ex) {
    throw ex;
  }
};

const writeCollections = (collections = '') => {
  try {
    window.localStorage.setItem("collections", JSON.stringify(collections));
  } catch (ex) {
    throw ex;
  }
};
