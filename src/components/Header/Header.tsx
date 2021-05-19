/* eslint-disable function-paren-newline */
import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import {
    HeaderContainer,
    LogoContainer,
    TitleHeader,
    SubtitleHeader,
    SearchBox,
    SearchBoxContainer,
    SearchBoxCorner,
} from './Header.style';
import {
    ICharacters2,
    ICharacterMap,
} from '../../interfaces/characters.interface';
import { searchCharactersRequest } from '../../store/ducks/characters/actions';

export const HeaderComponent: React.FC<ICharacters2> = ({
    characters,
}: ICharacters2) => {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();

    function handleSearch() {
        const arrFiltered = characters.filter((el: ICharacterMap) =>
            el.name.toLowerCase().includes(search.toLowerCase()),
        );
        dispatch(searchCharactersRequest(arrFiltered, search));
    }

    return (
        <HeaderContainer>
            <LogoContainer>
                <img
                    src={`${window.location.origin}/assets/marvel-logo.png`}
                    alt="marvel-logo"
                />
            </LogoContainer>
            <TitleHeader>Explore o Universo</TitleHeader>
            <SubtitleHeader>
                Mergulhe no domínio deslumbrante de todos os personagens que
                você ama - e aqueles que você descobrirá em breve!
            </SubtitleHeader>

            <SearchBoxContainer>
                <SearchBox onChange={e => setSearch(e.target.value)} />
                <SearchBoxCorner
                    searchIcon={`${window.location.origin}/assets/search.svg`}
                    onClick={() => handleSearch()}
                />
            </SearchBoxContainer>
        </HeaderContainer>
    );
};

export default HeaderComponent;
