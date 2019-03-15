import React from 'react';
import RatedMoviesContext from './RatedMoviesContext';
import Rating from 'react-rating';

const RatingMovie = ({ id, vote_average }) => (
  <RatedMoviesContext.Consumer>
    {ratedMoviesContext => (
      <Rating
        className="card__content__rating"
        stop={10}
        step={2}
        fractions={2}
        onChange={value => ratedMoviesContext.rateMovie(id, value)}
        initialRating={ratedMoviesContext.votes[id]}
        readonly={ratedMoviesContext.votes[id] != null}
        placeholderRating={vote_average}
        emptySymbol={
          <img src="/assets/images/star-grey.png" className="icon" />
        }
        placeholderSymbol={
          <img src="/assets/images/star-red.png" className="icon" />
        }
        fullSymbol={
          <img src="/assets/images/star-yellow.png" className="icon" />
        }
      />
    )}
  </RatedMoviesContext.Consumer>
);

export default RatingMovie;
