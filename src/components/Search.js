import React from 'react'

class Search extends React.Component{
    render(){
        return(
            <form className="form-inline mb-4">
  <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
  <button className="btn btn-primary" type="submit">Search</button>
</form>
        )
    }
}

export default Search