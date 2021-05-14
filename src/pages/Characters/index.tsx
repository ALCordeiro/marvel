import React, { useEffect, useState, useCallback } from 'react';
import { get } from '../../services/api';

import { Container, MoreCharactersContainer } from './index.style';

import { CardListComponent } from '../../components/CardList';
import { AddMoreCharactersComponent } from '../../components/AddMoreCharacters';
import { ResponseData } from '../../interfaces/character.interface';

const Characters: React.FC = () => {
    const [characters, setCharacters] = useState<ResponseData[]>([]);

    useEffect(() => {
        get('/characters')
            .then(response => {
                setCharacters(response.data.data.results);
            })
            .catch(err => console.log(err));
    }, []);

    const handleMoreCharacters = useCallback(async () => {
        try {
            const offset = characters.length;
            const response = await get('/characters', {
                params: {
                    offset,
                },
            });

            setCharacters([...characters, ...response.data.data.results]);
        } catch (err) {
            console.log(err);
        }
    }, [characters]);

    return (
        <Container>
            <CardListComponent characters={characters} />
            <MoreCharactersContainer onClick={handleMoreCharacters}>
                <AddMoreCharactersComponent />
            </MoreCharactersContainer>
        </Container>
    );
};
export default Characters;
