import React from "react";
import SearchContext from "./SearchContext";

class Search extends React.Component {
  state = {
    query: ""
  };
  render() {
    return (
      <SearchContext.Consumer>
        {({ updateQuery }) => {
          return (
            <form className="form-inline" onSubmit={e => e.preventDefault()}>
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search"
                aria-label="Search"
                onChange={this.updateSearch}
              />
              <button
                className="btn btn-primary"
                onClick={() => updateQuery(this.state.query)}
              >
                Search
              </button>
            </form>
          );
        }}
      </SearchContext.Consumer>
    );
  }
  updateSearch = ({ target: { value } }) =>
    this.setState({
      query: value
    });
}

export default Search;
