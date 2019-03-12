import React from "react";
import Movie from "./Movie";
import { getMovies } from "../commons/api";

class ShowMovies extends React.Component {
  state = {
    peliculas: []
  };

  getPeliculas = async query => {
    const peliculas = await getMovies(query);
    this.setState({
      peliculas
    });
  };

  componentDidMount() {
    this.getPeliculas(this.props.query);
  }

  componentDidUpdate(prevProps) {
      if (this.props.query !== prevProps.query) this.getPeliculas(this.props.query)
  }

  render() {
    const { peliculas } = this.state;
    return peliculas.map(pelicula => (
      <Movie
        key={pelicula.id}
        title={pelicula.title}
        date={pelicula.release_date}
        description={pelicula.overview}
        poster_path={pelicula.poster_path}
      />
    ));
  }
}
export default ShowMovies;
