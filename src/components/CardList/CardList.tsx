import React from 'react';

import { CardList } from './CardList.style';
import { CardComponent } from '../Card';
import {
    ICharacterCard,
    ICharacters2,
} from '../../interfaces/characters.interface';

export const CardListComponent: React.FC<ICharacters2> = ({
    characters,
}: ICharacters2) => (
    <CardList>
        {characters.map((character: ICharacterCard) => (
            <CardComponent character={character} />
        ))}
    </CardList>
);

export default CardListComponent;
