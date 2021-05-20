import styled from 'styled-components';
import { IThumbnailImg } from '../../interfaces/characters.interface';

const urlImg = (props: IThumbnailImg) => `
    ${props.thumbnail.path}.${props.thumbnail.extension}`;

export const Card = styled.div`
    background-color: #f1f1f1;
    height: 500px;
    width: 350px;
    margin: 10px;
    border-radius: 2px;
    overflow: hidden;
    box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.3);
    border: 0px solid #fff;
    cursor: pointer;
    border: 1px solid transparent;

    &:hover {
        border: 1px solid red;
    }
`;

export const CardAvatarContainer = styled.div`
    transition: all 1s;
    background-image: linear-gradient(to bottom right, #151515, #e0dcdc);
    display: flex;
    justify-content: center;
    align-self: center;
    border-bottom: 6px solid red;
`;

export const CardAvatar = styled.div`
    background: url(${urlImg}) no-repeat center;
    height: 375px;
    max-height: 375px;
    width: 100%;
    background-size: contain;
    display: block;
    transition: all 1s;
`;

export const CardBody = styled.div`
    justify-content: flex-start;
    align-self: center;
    padding: 40px 20px;
`;

export const CardTitle = styled.h1`
    display: block;
    font-size: 28px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 400;
`;
