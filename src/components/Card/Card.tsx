import React from 'react';
import PropTypes from 'prop-types';

import { Card, CardAvatarContainer, CardAvatar, CardBody } from './Card.style';
import { CharacterResponseData } from '../../interfaces/character.interface';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const CardComponent = ({ character }: CharacterResponseData) => (
    <Card key={character.id}>
        <CardAvatarContainer>
            <CardAvatar thumbnail={character.thumbnail} />
        </CardAvatarContainer>
        <CardBody>{character.name}</CardBody>
    </Card>
);

CardComponent.propTypes = {
    // eslint-disable-next-line react/require-default-props
    character: {
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        thumbnail: {
            path: PropTypes.string.isRequired,
            extension: PropTypes.string.isRequired,
        },
    },
};

export default CardComponent;
