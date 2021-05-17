import styled from 'styled-components';

interface Thumbnail {
    thumbnail: {
        path: string;
        extension: string;
    };
}

const urlImg = (props: Thumbnail) => `
    ${props.thumbnail.path}.${props.thumbnail.extension}`;

export const Card = styled.div`
    background-color: #f1f1f1;
    height: 500px;
    width: 400px;
    margin: 10px;
    border-radius: 2px;
    overflow: hidden;
    box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.3);
`;

export const CardAvatarContainer = styled.div`
    transition: all 1s;
    background-image: linear-gradient(to bottom right, #151515, #e0dcdc);
    display: flex;
    justify-content: center;
    align-self: center;
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

export const CardBody = styled.h1`
    display: flex;
    justify-content: flex-start;
    align-self: center;
    font-weight: 400;
    padding: 40px 20px;
    font-size: 28px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;
