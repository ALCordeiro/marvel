import React from 'react';
import { Link } from 'react-router-dom';

import {
    HeaderContainer,
    LogoContainer,
} from './HeaderCharactersDetails.style';

export const HeaderCharactersDetailsComponent: React.FC = () => (
    <HeaderContainer>
        <LogoContainer>
            <Link to={{ pathname: '/' }}>
                <img
                    src={`${window.location.origin}/assets/marvel-logo.png`}
                    alt="marvel-logo"
                />
            </Link>
        </LogoContainer>
    </HeaderContainer>
);

export default HeaderCharactersDetailsComponent;
