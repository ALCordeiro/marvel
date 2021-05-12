import React, { useEffect } from 'react';
import axios from 'axios';
import md5 from 'md5';

const baseUrl = 'http://gateway.marvel.com/v1/public/';

const publicKey = '504045cf6126f88ed2164341fb163bea';
const privateKey = 'e93e8a4a6dff83082d176321a2e6cbf7ce888a30';

const timeStamp = Number(new Date());

const hash = md5(timeStamp + privateKey + publicKey);

const App: React.FunctionComponent = () => {
    useEffect(() => {
        axios
            .get(
                `${baseUrl}characters?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`,
            )
            .then(response => console.log(response))
            .catch(err => console.log(err));
    }, []);

    return <div>Hello Marvel</div>;
};

export default App;
