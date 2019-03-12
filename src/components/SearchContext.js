import React from 'react'
const SearchContext = React.createContext({
    query: '',
    updateQuery: () => {}
})
export default SearchContext