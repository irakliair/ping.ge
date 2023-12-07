import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8000/api',
    timeout: 5000, // Request timeout in milliseconds
    headers: {
        'Content-Type': 'application/json',
        'X-Custom-Header': 'custom-value',
    },
    withCredentials: false,
});

export default instance;