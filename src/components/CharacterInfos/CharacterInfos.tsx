import React from 'react';

import {
    CharacterInfosContainer,
    CharacterName,
    CharacterDescription,
    CharacterExtraInfos,
    CharacterSubtitle,
} from './CharacterInfos.style';
import { ICharacterDetail } from '../../interfaces/characters.interface';

interface ICharacterComic {
    name: string;
}

export const CharacterInfosComponent: React.FC<ICharacterDetail> = ({
    character,
}: ICharacterDetail) => {
    const dataNotFound = 'Dados não encontrados';
    return (
        <CharacterInfosContainer>
            <CharacterName>{character.name}</CharacterName>
            <CharacterDescription>
                {character.description ? character.description : dataNotFound}
            </CharacterDescription>
            <CharacterExtraInfos>
                Quadrinhos:{' '}
                {character.comics && character.comics.available
                    ? character.comics.available
                    : dataNotFound}
            </CharacterExtraInfos>
            <CharacterExtraInfos>
                Filmes:{' '}
                {character.series ? character.series.available : dataNotFound}
            </CharacterExtraInfos>
            <CharacterSubtitle>Últimos lançamentos</CharacterSubtitle>
            {character.comics.items.map((characterComics: ICharacterComic) => (
                <p>{characterComics.name}</p>
            ))}
        </CharacterInfosContainer>
    );
};

export default CharacterInfosComponent;
