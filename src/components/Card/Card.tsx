import React from 'react';
import { Link } from 'react-router-dom';
import { ICharacterCard2 } from '../../interfaces/characters.interface';
import {
    Card,
    CardAvatarContainer,
    CardAvatar,
    CardBody,
    CardTitle,
} from './Card.style';

export const CardComponent: React.FC<ICharacterCard2> = ({
    character,
}: ICharacterCard2) => (
    <Link
        to={{ pathname: `/details?id=${character.id}`, state: character }}
        style={{ textDecoration: 'none' }}
    >
        <Card key={character.id}>
            <CardAvatarContainer>
                <CardAvatar thumbnail={character.thumbnail} />
            </CardAvatarContainer>
            <CardBody>
                <CardTitle>{character.name}</CardTitle>
            </CardBody>
        </Card>
    </Link>
);

export default CardComponent;
