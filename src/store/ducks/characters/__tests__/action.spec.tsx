/* eslint-disable no-undef */
import configureMockStore from 'redux-mock-store';
import { characters } from '../../../../utils/apiResponse';

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
    LOAD_CHARACTERS_REQUEST,
    LOAD_CHARACTERS_SUCCESS,
    SEARCH_CHARACTERS_REQUEST,
    SEARCH_CHARACTERS_SUCCESS,
    SORT_CHARACTERS_REQUEST,
    SORT_CHARACTERS_SUCCESS,
} from '../types';

const mockStore = configureMockStore();

test('load request', () => {
    const store = mockStore({});

    expect(store.dispatch(loadRequest())).toStrictEqual({
        type: LOAD_CHARACTERS_REQUEST,
        error: undefined,
        meta: undefined,
        payload: undefined,
    });
});

test('load success', () => {
    const store = mockStore({});

    expect(store.dispatch(loadSuccess(characters))).toStrictEqual({
        type: LOAD_CHARACTERS_SUCCESS,
        error: undefined,
        meta: undefined,
        payload: characters,
    });
});

test('load failure', () => {
    const store = mockStore({});

    expect(store.dispatch(loadFailure())).toStrictEqual({
        type: LOAD_CHARACTERS_FAILURE,
        payload: undefined,
        error: undefined,
        meta: undefined,
    });
});

test('search success', () => {
    const store = mockStore({});

    expect(store.dispatch(searchCharactersSuccess(characters))).toStrictEqual({
        type: SEARCH_CHARACTERS_SUCCESS,
        payload: characters,
        error: undefined,
        meta: undefined,
    });
});

test('search request', () => {
    const store = mockStore({});

    expect(
        store.dispatch(searchCharactersRequest(characters, 'AB')),
    ).toStrictEqual({
        type: SEARCH_CHARACTERS_REQUEST,
        payload: characters,
        error: undefined,
        meta: 'AB',
    });
});

test('sort request', () => {
    const store = mockStore({});

    expect(store.dispatch(sortCharactersRequest(characters))).toStrictEqual({
        type: SORT_CHARACTERS_REQUEST,
        payload: characters,
        error: undefined,
        meta: undefined,
    });
});

test('sort success', () => {
    const store = mockStore({});

    expect(store.dispatch(sortCharactersSuccess(characters))).toStrictEqual({
        type: SORT_CHARACTERS_SUCCESS,
        payload: characters,
        error: undefined,
        meta: undefined,
    });
});
