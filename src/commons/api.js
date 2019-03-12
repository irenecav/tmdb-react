
const URL = 'https://api.themoviedb.org/3/'
const API_KEY = 'd5e09491256c520c89c7e51f889ccc98'
const MAIN_URL = URL + 'discover/movie'

const searchMovies = async (query) => {
    try {
        const urlConQuery = `${URL}search/movie?api_key=${API_KEY}&query=${query}`
        const res = await fetch(urlConQuery);
        const { results } = await res.json()
        return results
    } catch(ex) {
        console.error('Ups! ERROR:', ex)
        throw ex
    }
}

const popularMovies = async () => {
    try{

        const portadaUrl = `${MAIN_URL}?api_key=${API_KEY}`
        const res = await fetch(portadaUrl)
        //console.log(res)
        const { results } = await res.json()

        console.log(results)

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

//Obtener las pelis en la portada
export const getMovies = async ( query ) => {
    return await (query ? searchMovies(query) : popularMovies())
    
}


