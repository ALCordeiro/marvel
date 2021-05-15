/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from './index.style';
import { loadRequest } from '../../store/ducks/characters/actions';
import { getCharacters } from '../../services/api';
import { CardListComponent } from '../../components/CardList';

const Characters: React.FC = () => {
    // const [characters, setCharacters] = useState('');
    const { characters, loading } = useSelector(
        (state: any) => state.characters,
    );
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(fetchSettlementListRequest());
    //     console.log(loading);
    // }, []);

    useEffect(() => {
        console.log('loading', loading);
        if (!loading) {
            dispatch(loadRequest());
            getCharacters('/characters')
                .then(response => {
                    // dispatch(loadSuccess(response.data.data.results));
                    console.log(response);
                })
                .catch(err => console.log(err));
        }
    }, [loading, characters, dispatch]);

    // const handleMoreCharacters = useCallback(async () => {
    //     try {
    //         const offset = characters.length;
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
