import React, { Component } from 'react';
import RatingMovie from '../components/RatingMovie';
import AddToCollection from '../components/AddToCollection';
import CollectionsContext from '../components/CollectionsContext';
import Crew from '../components/Crew';
import Cast from '../components/Cast';
import { getMovieDetail } from '../commons/api';

const IMG_URL = 'https://image.tmdb.org/t/p/w1280';

function timeConvert(minutesTotal) {
  if (minutesTotal == null) return;

  const hours = minutesTotal / 60;
  const rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes);
  return `${rhours} hour(s) and ${rminutes} minute(s)`;
}

const getId = props => {
  const {
    match: {
      params: { id }
    }
  } = props;
  return id;
};

class Detail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: getId(props),
      peli: {}
    };
  }

  getPelicula = async () => {
    const id = getId(this.props);
    const peli = await getMovieDetail(id);
    console.table('Detail: ', peli);
    this.setState({ id, peli });
  };

  componentDidMount() {
    this.getPelicula();
  }

  componentDidUpdate(prevProps) {
    const id = getId(this.props);
    const oldId = getId(prevProps);

    if (id !== oldId) {
      this.getPelicula();
    }
  }

  render() {
    const { id, peli = {} } = this.state;

    const {
      title,
      release_date = '',
      overview,
      poster_path,
      vote_average,
      original_language = '',
      runtime,
      budget,
      revenue,
      genres = [],
      cast = [],
      crew = [],
      production_countries = []
    } = peli;

    return (
      <CollectionsContext.Consumer>
        {collectionContext => (
          <div className="card detail">
            <figure>
              <img src={`${IMG_URL}${poster_path}`} alt={title} />
            </figure>
            <div className="card__content">
              <header className="header__detail">
                <h2>
                  {title}
                  <span>- {release_date.substr(0, 4)}</span>
                </h2>
              </header>
              <main className="main__detail">
                <RatingMovie id={id} vote_average={vote_average} />

                <p>{overview}</p>

                <Cast cast={cast} />

                <ul>
                  {production_countries.map(({ name }, i) => (
                    <li key={i}>{name}</li>
                  ))}
                </ul>
              </main>
            </div>
            <section>
              <div className="aside">
                <strong>Release date</strong>
                <p>{release_date}</p>

                <strong>Original Language</strong>
                <p>{original_language.toUpperCase()}</p>

                <strong>Runtime</strong>
                <p>{timeConvert(runtime)}</p>

                <strong>Budget</strong>
                <p>${budget}</p>

                <strong>Revenue</strong>
                <p>${revenue}</p>
              </div>
              <div className="aside">
                <ul>
                  {genres.map(({ name }, i) => (
                    <li key={i}>{name}</li>
                  ))}
                </ul>
                <AddToCollection
                  colecciones={collectionContext.collections}
                  peli={{
                    id,
                    title,
                    release_date,
                    overview,
                    poster_path,
                    vote_average
                  }}
                  onAdd={collectionContext.addMovieToCollection}
                />
              </div>
            </section>
            <Crew crew={crew} />

            <footer />
          </div>
        )}
      </CollectionsContext.Consumer>
    );
  }
}

export default Detail;
