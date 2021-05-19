/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, MoreCharactersContainer } from './index.style';
import { loadRequest } from '../../store/ducks/characters/actions';
import { CardListComponent } from '../../components/CardList';
import { IRootState } from '../../interfaces/characters.interface';
import { AddMoreCharactersComponent } from '../../components/AddMoreCharacters';
import { HeaderComponent } from '../../components/Header';

const Characters: React.FC = () => {
    const { characters } = useSelector((state: IRootState) => state.characters);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadRequest());
    }, [dispatch]);

    const handleMoreCharacters = useCallback(async () => {
        try {
            const offset = characters.length;
            dispatch(loadRequest(offset));
        } catch (err) {
            console.log(err);
        }
    }, [characters.length, dispatch]);

    return (
        <Container>
            <HeaderComponent characters={characters} />
            <CardListComponent characters={characters} />
            <MoreCharactersContainer onClick={handleMoreCharacters}>
                <AddMoreCharactersComponent />
            </MoreCharactersContainer>
        </Container>
    );
};

export default Characters;
