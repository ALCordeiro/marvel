import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { resetCharacters } from '../../store/ducks/characters/actions';

import {
    HeaderContainer,
    LogoContainer,
} from './HeaderCharactersDetails.style';

export const HeaderCharactersDetailsComponent: React.FC = () => {
    const dispatch = useDispatch();
    return (
        <HeaderContainer>
            <LogoContainer>
                <Link
                    to={{ pathname: '/' }}
                    onClick={() => dispatch(resetCharacters())}
                >
                    <img
                        src={`${window.location.origin}/assets/marvel-logo.png`}
                        alt="marvel-logo"
                    />
                </Link>
            </LogoContainer>
        </HeaderContainer>
    );
};

export default HeaderCharactersDetailsComponent;
