import React from 'react';
import ShowMovies from '../components/ShowMovies';
import { getMovies } from '../commons/api';
import withSearchParams from '../components/withSearchParams';

class Movies extends React.Component {
  state = {
    peliculas: []
  };

  getPeliculas = async () => {
    const peliculas = await getMovies(this.props.params.get('search'));

    this.setState({
      peliculas
    });
  };

  componentDidMount() {
    this.getPeliculas();
  }

  componentDidUpdate(prevProps) {
    if (this.props.params.get('search') !== prevProps.params.get('search')) {
      this.getPeliculas();
    }
  }

  render() {
    return <ShowMovies peliculas={this.state.peliculas} />;
  }
}

export default withSearchParams(Movies);
