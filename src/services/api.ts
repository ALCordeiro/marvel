import axios from 'axios';
import md5 from 'md5';

const baseUrl = 'http://gateway.marvel.com/v1/public/';

const apikey = '504045cf6126f88ed2164341fb163bea';
const privateKey = 'e93e8a4a6dff83082d176321a2e6cbf7ce888a30';

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

export const getCharacters = (url: string, options?: any) =>
    api.get(url, options);
