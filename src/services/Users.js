import axios from 'axios'
// importujem axios

export default class Users {
    constructor () {
      axios.defaults.baseURL = 'http://localhost:8000/api/'
      // definisem default url na koji ce se nastavljati http requesti
    }

    add(user) {
        // console.log(user)
        return axios.post('users', user)
    }
}

export const users = new Users ()