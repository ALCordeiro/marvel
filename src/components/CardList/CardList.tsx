import React from 'react';

import { CardList } from './CardList.style';
import { CardComponent } from '../Card';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const CardListComponent = ({ characters }: any) => (
    <CardList>
        {characters.map((character: any) => (
            <CardComponent character={character} />
        ))}
    </CardList>
);

export default CardListComponent;
