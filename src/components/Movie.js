import React from 'react';
import { withCollectionsContext } from './CollectionsContext';
import Link from 'react-router-dom/Link';
import RatingMovie from './RatingMovie';
import AddToCollection from './AddToCollection';
import withRouter from 'react-router-dom/withRouter';

const IMG_URL = 'https://image.tmdb.org/t/p/w1280';

class Movie extends React.Component {
  isInCollectionPage = window.location.pathname.startsWith('/collection');

  removeHandler = () => {
    const {
      match: { params },
      context: { removeMovieFromCollection }
    } = this.props;
    const { id: collectionId } = params;

    removeMovieFromCollection(this.props.id, collectionId);
  };

  render() {
    const {
      id,
      title,
      release_date,
      overview,
      poster_path,
      vote_average,
      context
    } = this.props;

    return (
      <div className="card">
        <figure>
          <Link to={`/movie/${id}`}>
            <img src={`${IMG_URL}${poster_path}`} alt={title} />
          </Link>
        </figure>
        <div className="card__content">
          <header className="card__content__header">
            <Link to={`/movie/${id}`}>
              <h2>{title}</h2>
            </Link>
          </header>
          <main className="card__content__main">
            <RatingMovie {...this.props} />
            <p className="description">{overview}</p>
            <p>{release_date}</p>
          </main>
          <footer className="card__content__footer">
            {this.isInCollectionPage && (
              <i className="far fa-trash-alt" onClick={this.removeHandler} />
            )}

            {!this.isInCollectionPage && (
              <AddToCollection
                colecciones={context.collections}
                peli={{
                  id,
                  title,
                  release_date,
                  overview,
                  poster_path,
                  vote_average
                }}
                onAdd={context.addMovieToCollection}
              />
            )}
          </footer>
        </div>
      </div>
    );
  }
}

export default withRouter(withCollectionsContext(Movie));
