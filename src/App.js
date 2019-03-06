import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Movies from './modules/Movies'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Navbar />
        <Search/>
        </header>
        <Movies/>
      </div>
    );
  }
}

export default App;
