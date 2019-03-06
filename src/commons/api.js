const URL = 'https://api.themoviedb.org/3/'
const API_KEY = 'd5e09491256c520c89c7e51f889ccc98'

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