import React, { useEffect, useState } from 'react';
import { get } from '../../services/api';

import { Container } from './styles';

interface ResponseData {
    id: string;
    name: string;
    description: string;
    thumbnail: {
        path: string;
        extension: string;
    };
}

const Characters: React.FC = () => {
    const [characters, setCharacters] = useState<ResponseData[]>([]);

    useEffect(() => {
        get('/characters')
            .then(response => {
                setCharacters(response.data.data.results);
            })
            .catch(err => console.log(err));
    }, []);
    console.log('my characters', characters);

    return <Container>Characters</Container>;
};
export default Characters;
