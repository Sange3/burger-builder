import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://myburger-db0e4.firebaseio.com/'
});

export default instance;