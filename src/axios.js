import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://facebook-mern-build.herokuapp.com/'
})

export default instance