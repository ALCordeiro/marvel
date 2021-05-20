import React from 'react';

import {
    CharacterInfosContainer,
    CharacterName,
    CharacterDescription,
    CharacterExtraInfos,
    CharacterSubtitle,
    CharacterExtraInfosContainer,
    CharacterExtraInfosTitle,
    CharacterExtraInfosData,
    CharacterExtraInfosText,
    CharacterMainInfos,
    CharacterMainTextInfos,
    Avatar,
} from './CharacterInfos.style';
import {
    ICharacterDetail,
    ICharacterMap,
} from '../../interfaces/characters.interface';

export const CharacterInfosComponent: React.FC<ICharacterDetail> = ({
    character,
}: ICharacterDetail) => {
    const dataNotFound = 'Dados não encontrados';
    return (
        <CharacterInfosContainer>
            <CharacterMainInfos>
                <CharacterMainTextInfos>
                    <CharacterName>{character.name}</CharacterName>
                    <CharacterDescription>
                        {character.description
                            ? character.description
                            : dataNotFound}
                    </CharacterDescription>
                </CharacterMainTextInfos>
                <Avatar thumbnail={character.thumbnail} />
            </CharacterMainInfos>

            <CharacterExtraInfos>
                <CharacterExtraInfosContainer>
                    <CharacterExtraInfosTitle>
                        Quadrinhos
                    </CharacterExtraInfosTitle>
                    <CharacterExtraInfosData>
                        <img
                            src={`${window.location.origin}/assets/comics-marvel.svg`}
                            alt="marvel-super-hero"
                        />
                        <CharacterExtraInfosText>
                            {character.comics && character.comics.available
                                ? character.comics.available
                                : dataNotFound}
                        </CharacterExtraInfosText>
                    </CharacterExtraInfosData>
                </CharacterExtraInfosContainer>

                <CharacterExtraInfosContainer>
                    <CharacterExtraInfosTitle>Filmes</CharacterExtraInfosTitle>
                    <CharacterExtraInfosData>
                        <img
                            src={`${window.location.origin}/assets/video-marvel.svg`}
                            alt="marvel-super-hero"
                        />
                        <CharacterExtraInfosText>
                            {character.comics && character.comics.available
                                ? character.comics.available
                                : dataNotFound}
                        </CharacterExtraInfosText>
                    </CharacterExtraInfosData>
                </CharacterExtraInfosContainer>
            </CharacterExtraInfos>
            <CharacterSubtitle>Últimos lançamentos</CharacterSubtitle>
            {character.comics.items.map((characterComics: ICharacterMap) => (
                <p>{characterComics.name}</p>
            ))}
        </CharacterInfosContainer>
    );
};

export default CharacterInfosComponent;
