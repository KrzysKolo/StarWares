import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://swapi.dev/api/films/'
});

export default axiosClient;