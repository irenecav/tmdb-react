import { throws } from "assert";

const URL = 'https://api.themoviedb.org/3/'
const API_KEY = 'd5e09491256c520c89c7e51f889ccc98'
const MAIN_URL = URL + 'discover/movie'

export const getSearchMovies = async (query) => {
        
    try {
        const urlConQuery = `${URL}search/movie/?api_key=${API_KEY}&query=${query}&callback=suputamadre`
        const res = await fetch(urlConQuery, {
        });
        // const pelis = res.json()
         console.log(res)
        return [
        ]
    } catch(ex) {
        console.error('Ups! ERROR:', ex)
    }
}

//Obtener las pelis en la portada
export const getMovies = async ( ) => {

    try{

        const portadaUrl = `${MAIN_URL}/?api_key=${API_KEY}`
        const res = await fetch(portadaUrl)
        //console.log(res)
        const { results } = await res.json()
        const mapDatos = results.map((dato) => {
            if (dato.movie) {
              return dato.movie;
            }
            return dato;
          });
          return mapDatos;


    }catch(ex){
        console.error('Ups! ERROR:', ex)
        throw ex
    }
}


