import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

export const shortenUrl = (originalUrl) => {
    return axios.post(`${API_BASE_URL}/shorten`, originalUrl, {
        headers: { 'Content-Type': 'text/plain' },
    });
};

export const getOriginalUrl = (shortUrl) => {
    return axios.get(`${API_BASE_URL}/redirect/${shortUrl}`);
};
