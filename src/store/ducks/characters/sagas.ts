import { call, put } from 'redux-saga/effects';
import * as Eff from 'redux-saga/effects';
import { getCharacters } from '../../../services/api';
import { loadSuccess, loadFailure } from './actions';
import { LOAD_CHARACTERS_REQUEST } from './types';

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

export const CharactersSaga = [
    takeLatest(LOAD_CHARACTERS_REQUEST, fetchCharactersListRequest),
];
