import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Movies from "./modules/Movies";
import Footer from "./components/Footer";
import SearchContext from "./components/SearchContext";

class App extends React.Component {
  state = {
    query: "",
    updateQuery: query => {
      console.log(query)
      this.setState({ query })}
  };
  render() {
    return (
      <div className="App">
        <SearchContext.Provider value={this.state}>
          <header className="App-header">
            <Navbar />
          </header>
          <Movies />
        </SearchContext.Provider>

        <Footer />
      </div>
    );
  }
}

export default App;
