/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useLocation } from 'react-router-dom';
import { ContainerCharactersDetails, Wrapper } from './index.style';
import { HeaderCharactersDetailsComponent } from '../../components/HeaderCharactersDetails';
import { CharacterInfosComponent } from '../../components/CharacterInfos';
import { IState } from '../../interfaces/characters.interface';

const CharactersDetails: React.FC = () => {
    const location: IState = useLocation();

    return (
        <ContainerCharactersDetails
            urlImg={`${window.location.origin}/assets/marvel-background.jpeg`}
        >
            <Wrapper>
                <HeaderCharactersDetailsComponent />
                <CharacterInfosComponent character={location.state} />
            </Wrapper>
        </ContainerCharactersDetails>
    );
};

export default CharactersDetails;
