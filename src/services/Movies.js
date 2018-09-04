import axios from 'axios'
// importujem axios

export default class Movies {
    constructor () {
      axios.defaults.baseURL = 'http://localhost:8000/api/'
      // definisem default url na koji ce se nastavljati http requesti
    }

    getAll() {
        return axios.get('movies')
    }

    add(movie) {

        if(!movie.genre) {
            movie.genre = 'Unknown'
        }
        if(!movie.imageUrl) {
            movie.imageUrl = 'https://canadatwoway.com/wp-content/uploads/2017/11/No_Image_Available.jpg'
        }
        return axios.post('movies', movie)
    }
    get(id) {
        // console.log(id)
        return axios.get(`movies/${id}`)
    }
    // deleteMovie(movie) {
    //     return axios.delete(`movies/${movie.id}`)
    // }
    // edit(movie) {
    //     return axios.put(`movies/${movie.id}`, movie)
    // }
}

export const movies = new Movies ()
