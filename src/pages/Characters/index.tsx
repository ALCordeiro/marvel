import React, { useEffect, useState } from 'react';
import { get } from '../../services/api';

import { Container } from './index.style';

import { CardListComponent } from '../../components/CardList';
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

    return (
        <Container>
            {/* <CardList>
                {characters.map(character => (
                    // <Card key={character.id}>
                    //     <div id="img" />
                    //     <h2>{character.name}</h2>
                    //     <p>{character.description}</p>
                    // </Card>
                    <CardComponent character={character} />
                ))}
            </CardList> */}
            <CardListComponent characters={characters} />
        </Container>
    );
};
export default Characters;
