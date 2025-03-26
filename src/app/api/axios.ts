import axios from 'axios';

const axiosStarWars = axios.create({
    baseURL: 'https://swapi.dev/api/',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosStarWars;