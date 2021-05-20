import styled from 'styled-components';
import { IThumbnailImg } from '../../interfaces/characters.interface';

export const CharacterInfosContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
    min-width: 100%;
`;

export const CharacterName = styled.h1`
    font-size: 32px;
    padding-bottom: 20px;
`;

export const CharacterDescription = styled.h2`
    font-size: 16px;
    padding-bottom: 40px;
    font-weight: 400;
`;

export const CharacterExtraInfos = styled.div`
    display: flex;
    justify-content: space-between;
    min-width: 200px;
    align-items: center;

    @media (max-width: 800px) {
        align-self: center;
    }
`;

export const CharacterExtraInfosContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80px;
`;

export const CharacterExtraInfosText = styled.p`
    font-size: 16px;
    font-weight: bold;
`;

export const CharacterExtraInfosTitle = styled.h3`
    font-size: 16px;
`;

export const CharacterExtraInfosData = styled.div`
    display: flex;
    padding: 20px 0px;
    justify-content: space-between;
    align-items: flex-start;
    font-size: 20px;

    img {
        width: 25px;
        height: 25px;
    }
`;

export const CharacterSubtitle = styled.h4`
    font-size: 18px;
    padding-top: 50px;
    padding-bottom: 30px;
`;

export const CharacterMainInfos = styled.div`
    display: flex;
    min-width: 100%;

    @media (max-width: 800px) {
        flex-direction: column;
        position: relative;
        text-align: center;
        margin-bottom: 20px;
    }
`;

export const CharacterMainTextInfos = styled.div`
    flex-direction: column;
    flex-basis: 70%;
`;

const urlImg = (props: IThumbnailImg) => `
    ${props.thumbnail.path}.${props.thumbnail.extension}`;

export const Avatar = styled.div`
    background: url(${urlImg}) no-repeat center;
    height: 375px;
    max-height: 375px;
    background-size: contain;
    display: block;
    transition: all 1s;
    flex-basis: 30%;

    @media (max-width: 800px) {
        flex-basis: auto;
        width: 100%;
    }
`;
