import React from "react";
import ShowMovies from "../components/ShowMovies";
import SearchContext from "../components/SearchContext";

const Movies = () => (
  <SearchContext.Consumer>
    {({ query }) => <ShowMovies query={query} />}
  </SearchContext.Consumer>
);

export default Movies;
