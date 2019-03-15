import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Movies from './modules/Movies';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import Detail from './modules/Detail';
import Collection from './modules/Collection';
import ShowCollections from './modules/ShowCollections';
import WithCollectionsContext from './components/WithCollectionsContext';
import WithRatedMoviesContext from './components/WithRatedMoviesContext';

const RedirectToHome = () => <Redirect to="/" />;

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Navbar />
          </header>
          <div className="wrap">
            <WithCollectionsContext>
              <WithRatedMoviesContext>
                <Switch>
                  <Route exact path="/" component={Movies} />
                  <Route path="/movie/:id" component={Detail} />
                  <Route path="/collections" component={ShowCollections} />
                  <Route path="/collection/:id" component={Collection} />
                  <Route component={RedirectToHome /*o una 404 custom*/} />
                </Switch>
              </WithRatedMoviesContext>
            </WithCollectionsContext>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
