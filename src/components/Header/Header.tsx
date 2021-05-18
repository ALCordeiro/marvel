import React, { useState } from 'react';

import {
    HeaderContainer,
    LogoContainer,
    TitleHeader,
    SubtitleHeader,
    SearchBox,
    SearchBoxContainer,
    SearchBoxCorner,
} from './Header.style';

export const HeaderComponent: React.FC = () => {
    const [search, setSearch] = useState('');

    function handleSearch() {
        console.log('caiu no search', search);
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
