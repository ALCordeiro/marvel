/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from './index.style';
import { loadRequest } from '../../store/ducks/characters/actions';
import { CardListComponent } from '../../components/CardList';
import { IRootState } from '../../interfaces/characters.interface';

const Characters: React.FC = () => {
    const { characters } = useSelector((state: IRootState) => state.characters);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadRequest());
    }, [dispatch]);

    // const handleMoreCharacters = useCallback(async () => {
    //     try {
    //         const offset = this.characters.length;
    //         const response = await get('/characters', {
    //             params: {
    //                 offset,
    //             },
    //         });

    //         setCharacters([...characters, ...response.data.data.results]);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }, [characters]);

    return (
        <Container>
            <CardListComponent characters={characters} />
            {/* <MoreCharactersContainer onClick={handleMoreCharacters}>
                <AddMoreCharactersComponent />
            </MoreCharactersContainer> */}
        </Container>
    );
};

export default Characters;
