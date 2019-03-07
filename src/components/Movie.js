import React from 'react';

class Movie extends React.Component{

    render(){
        const {title, date, description , genres} = this.props;
        return (
            <div className="card">
            <header className="card__header">
            <h2>{title}</h2>
            </header>
            <main className="card__main">
            <figure>
            <img src="" />
            </figure>
            <ul>
                {genres.map((genero)=> <li key={genero.id} >{genero.name}</li>)}
            </ul>
            <p>{description}</p>
            <p>{date}</p>
           

            </main>
            <footer className="card__footer">

            </footer>

            
            </div>

        )
    }
}
export default Movie 