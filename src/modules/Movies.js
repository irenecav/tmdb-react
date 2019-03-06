import React from 'react'
import { getSearchMovies } from '../commons/api'
import Movie from '../components/Movie'
import movie from '../movie.json'

class Movies extends React.Component{
    state = {
        peliculas : []
    }
    
   async componentDidMount() {
        const peliculas =  [movie]
        console.log(peliculas)
        this.setState({
            peliculas
        })
    }


    render(){
        const  { peliculas = []} = this.state

        return (<div>
            {peliculas.map((pelicula, index) => <Movie key={pelicula.id} title={pelicula.title} date={pelicula.release_date} description={pelicula.overview} genres={pelicula.genres} />)}
        </div>)
        
    }
}

export default Movies