import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-bottom: 40px;
`;

export const LogoContainer = styled.div`
    display: flex;
    max-width: 330px;
    max-height: 120px;
    justify-content: center;
    padding-bottom: 20px;
`;

export const TitleHeader = styled.h2`
    text-transform: uppercase;
    font-size: 38px;
    color: #202020;
    padding-bottom: 10px;
`;

export const SubtitleHeader = styled.h3`
    font-size: 16px;
    color: gray;
    font-weight: 400;
    padding-bottom: 50px;
`;

export const SearchBoxContainer = styled.div`
    position: relative;
    width: 75%;
    height: 50px;
`;

export const SearchBox = styled.input.attrs({
    type: 'text',
    placeholder: 'Procure por heróis',
    name: 'search',
    id: 'search-input-characters',
})`
    width: 100%;
    border-radius: 15px;
    border: 0px;
    background-color: rgba(255, 0, 0, 0.1);
    padding: 5px 5px 5px 45px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    height: 100%;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
`;

interface SearchIcon {
    searchIcon: string;
}

const urlImg = (props: SearchIcon) => `${props.searchIcon}`;

export const SearchBoxCorner = styled.input.attrs({
    type: 'button',
    value: '',
})`
    position: absolute;
    top: 14px;
    left: 14px;
    height: 20px;
    width: 20px;
    z-index: 10;
    border-radius: 10px;
    border: none;
    background: no-repeat center url(${urlImg});
    cursor: pointer;
`;
