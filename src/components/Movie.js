import React from 'react';

class Movie extends React.Component{

    render(){
        const {title, date, description , genres} = this.props;
        return (
            <div className="card">
            <header className="card__header">
            <h2>{title}</h2>
            <p>{date}</p>
            </header>
            <main className="card__main">
            <p>{description}</p>
            <ul>
                {genres.map((genero)=> <li key={genero.id} >{genero.name}</li>)}
            </ul>

            </main>
            <footer className="card__footer">

            </footer>

            
            </div>

        )
    }
}
export default Movie 