import axios from 'axios'

export default class AuthService {

    constructor() {
        axios.defaults.baseURL = 'http://localhost:8000/api/'
        this.setAuthorizationHeader()
    }

    logout() {
        localStorage.removeItem('token')
	return axios.post('auth/logout')
        // delete axios.defaults.headers.common['Authorization']
    }

    login(email, password) {
        return axios.post('auth/login', { email, password })
        .then((response) => {
        window.localStorage.setItem('token', response.data.access_token)
        this.setAuthorizationHeader()
        })
    }

    setAuthorizationHeader() {
        const token = window.localStorage.getItem('token')
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }

    isAuthenticated() {
        return !!localStorage.getItem('token')
    }
}

export const authService = new AuthService()
