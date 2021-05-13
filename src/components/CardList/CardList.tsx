import React from 'react';
import PropTypes from 'prop-types';

import { CardList } from './CardList.style';
import { CardComponent } from '../Card';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const CardListComponent = ({ characters }: any) => {
    console.log('CARD LIST', characters);

    return (
        <CardList>
            {characters.map((character: any) => (
                <CardComponent character={character} />
            ))}
        </CardList>
    );
};

CardListComponent.propTypes = {
    // eslint-disable-next-line react/require-default-props
    characters: {
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        thumbnail: {
            path: PropTypes.string.isRequired,
            extension: PropTypes.string.isRequired,
        },
    },
};

export default CardListComponent;
