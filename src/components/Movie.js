import React from 'react';

class Movie extends React.Component {
  render() {
    const { title, date, description, poster_path } = this.props;

    return (
      <div className="card">
        <figure>
          <img
            src={`https://image.tmdb.org/t/p/w1280${poster_path}`}
            alt={title}
          />
        </figure>
        <div className="card__content">
          <header className="card__content__header">
            <h2>{title}</h2>
          </header>
          <main className="card__content__main">
            <p className="description">{description}</p>
            <p>{date}</p>
            <ul>
              {/* {genres.map((genero)=> <li key={genero.id} >{genero.name}</li>)}*/}
            </ul>
          </main>
          <footer className="card__content__footer" />
        </div>
      </div>
    );
  }
}
export default Movie;
