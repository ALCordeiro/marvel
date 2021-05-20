/* eslint-disable no-undef */
import SagaTester from 'redux-saga-tester';
import { characters } from '../../../../utils/apiResponse';

import { rootSagas } from '../../../sagas';
import {
    loadFailure,
    loadRequest,
    loadSuccess,
    searchCharactersRequest,
    searchCharactersSuccess,
    sortCharactersRequest,
    sortCharactersSuccess,
} from '../actions';
import {
    LOAD_CHARACTERS_FAILURE,
    LOAD_CHARACTERS_SUCCESS,
    SEARCH_CHARACTERS_SUCCESS,
    SORT_CHARACTERS_SUCCESS,
} from '../types';

const sagaTester = new SagaTester({
    initialState: {
        loginReducer: {
            username: 'teste@teste.com',
        },
    },
});
sagaTester.start(rootSagas);

test('set characters request', async () => {
    const expectedAction = loadSuccess(characters);

    sagaTester.dispatch(loadRequest());

    const charactersRequestAction = await sagaTester.waitFor(
        LOAD_CHARACTERS_SUCCESS,
    );
    expect(expectedAction.type).toStrictEqual(charactersRequestAction.type);
});

test('set characters error', async () => {
    const expectedAction = loadFailure();

    sagaTester.dispatch(loadFailure());

    const charactersRequestAction = await sagaTester.waitFor(
        LOAD_CHARACTERS_FAILURE,
    );
    expect(expectedAction.type).toStrictEqual(charactersRequestAction.type);
});

test('set search characters request', async () => {
    const expectedAction = searchCharactersSuccess(characters);

    sagaTester.dispatch(searchCharactersRequest(characters, 'Ab'));

    const searchCharactersRequestAction = await sagaTester.waitFor(
        SEARCH_CHARACTERS_SUCCESS,
    );
    expect(expectedAction.type).toStrictEqual(
        searchCharactersRequestAction.type,
    );
});

test('set sort characters request', async () => {
    const expectedAction = sortCharactersSuccess(characters);

    sagaTester.dispatch(sortCharactersRequest(characters));

    const sortRequestAction = await sagaTester.waitFor(SORT_CHARACTERS_SUCCESS);
    expect(expectedAction.type).toStrictEqual(sortRequestAction.type);
});
