import { call, put } from 'redux-saga/effects';
import * as Eff from 'redux-saga/effects';
import { getCharacters } from '../../../services/api';
import {
    loadSuccess,
    loadFailure,
    searchCharactersSuccess,
    sortCharactersSuccess,
} from './actions';
import {
    LOAD_CHARACTERS_REQUEST,
    SEARCH_CHARACTERS_REQUEST,
    SORT_CHARACTERS_REQUEST,
} from './types';
import {
    ICharacters2,
    ISearchCharacter,
} from '../../../interfaces/characters.interface';

// eslint-disable-next-line prefer-destructuring
const takeLatest: any = Eff.takeLatest;

function* fetchCharactersListRequest(offset: { payload: number }) {
    try {
        const {
            data: {
                data: { results },
            },
        } = offset
            ? yield call(getCharacters, { params: { offset: offset.payload } })
            : yield call(getCharacters);

        yield put(loadSuccess(results));
    } catch (error) {
        yield put(loadFailure());
    }
}

function* fetchSearchCharacters(characters: ISearchCharacter) {
    try {
        if (characters.meta === '') {
            const {
                data: {
                    data: { results },
                },
            } = yield call(getCharacters);
            yield put(searchCharactersSuccess(results));
        } else {
            yield put(searchCharactersSuccess(characters));
        }
    } catch (error) {
        yield put(loadFailure());
    }
}

function* fetchSortCharacters(characters: ICharacters2) {
    try {
        yield put(sortCharactersSuccess(characters));
    } catch (error) {
        yield put(loadFailure());
    }
}

export const CharactersSaga = [
    takeLatest(LOAD_CHARACTERS_REQUEST, fetchCharactersListRequest),
    takeLatest(SEARCH_CHARACTERS_REQUEST, fetchSearchCharacters),
    takeLatest(SORT_CHARACTERS_REQUEST, fetchSortCharacters),
];
