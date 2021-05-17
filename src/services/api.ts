import axios from 'axios';
import md5 from 'md5';

const baseUrl = 'http://gateway.marvel.com/v1/public/';

const apikey = 'b2037c9e59a9ae03b270b2457c065e5e';
const privateKey = '44ae11be441955703ff8321f81cbfa3f7f4056a8';

const ts = Number(new Date());

const hash = md5(ts + privateKey + apikey);

const api = axios.create({
    baseURL: baseUrl,
    params: {
        ts,
        apikey,
        hash,
    },
});

export const getCharacters = (options?: any) => api.get('/characters', options);
