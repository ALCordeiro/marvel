import React from 'react';

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

export default CardComponent;
