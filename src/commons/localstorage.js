const read = clave => {
  try {
    const str = localStorage.getItem(clave);
    return JSON.parse(str);
  } catch (ex) {
    console.error(ex);
    throw ex;
  }
};

const write = (clave, valor) => {
  try {
    localStorage.setItem(clave, JSON.stringify(valor));
  } catch (ex) {
    console.error(ex);
    throw ex;
  }
};

/* Colecciones*/

const initCollections = () => {
  const coleccionesIniciales = [
    {
      id: 0,
      title: 'Mis Favoritas',
      overview: 'Colección inicial por defecto del usuario',
      movies: []
    }
  ];
  writeCollections(coleccionesIniciales);
};

export const readCollections = () => {
  const colecciones = read('collections');

  if (colecciones != null) return colecciones;

  initCollections();
  return readCollections();
};

export const writeCollections = (collections = []) =>
  write('collections', collections);

/* Votos */

export const readRatedMovies = () => read('ratedMovies') || {};
export const writeRatedMovies = votos => write('ratedMovies', votos);
