import React from 'react';
import { ICharacterCard2 } from '../../interfaces/characters.interface';
import { Card, CardAvatarContainer, CardAvatar, CardBody } from './Card.style';

export const CardComponent: React.FC<ICharacterCard2> = ({
    character,
}: ICharacterCard2) => (
    <Card key={character.id}>
        <CardAvatarContainer>
            <CardAvatar thumbnail={character.thumbnail} />
        </CardAvatarContainer>
        <CardBody>{character.name}</CardBody>
    </Card>
);

export default CardComponent;
