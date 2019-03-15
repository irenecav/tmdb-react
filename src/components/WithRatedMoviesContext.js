import React from 'react';
import RatedMoviesContext from './RatedMoviesContext';
import { readRatedMovies, writeRatedMovies } from '../commons/localstorage';

class WithRatedMoviesContext extends React.Component {
  state = { votes: readRatedMovies() };

  render() {
    return (
      <RatedMoviesContext.Provider
        value={{
          votes: this.state.votes,
          reloadVotes: this.reloadVotes,
          rateMovie: this.rateMovie
        }}
      >
        {this.props.children}
      </RatedMoviesContext.Provider>
    );
  }

  reloadVotes = () => {
    const votes = readRatedMovies();
    this.setState({ votes });
  };

  rateMovie = (movieId, vote) => {
    if (this.state.votes[movieId] === vote) return;

    writeRatedMovies({ ...this.state.votes, [movieId]: vote });
    this.reloadVotes();
  };
}

export default WithRatedMoviesContext;
