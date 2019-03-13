import React from 'react';
import { Link } from 'react-router-dom';

class Search extends React.Component {
  state = {
    query: ''
  };
  render() {
    return (
      <form className="form-inline" onSubmit={e => e.preventDefault()}>
        <input
          className="form-control mr-sm-2"
          type="text"
          placeholder="Search"
          aria-label="Search"
          onChange={this.updateSearch}
        />
        <Link
          to={{
            pathname: '/',
            search: `?search=${this.state.query}`
          }}
        >
          <button className="btn btn-primary">Search</button>
        </Link>
      </form>
    );
  }

  updateSearch = ({ target: { value } }) =>
    this.setState({
      query: value
    });
}

export default Search;
