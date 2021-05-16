import { call, put, takeLatest } from 'redux-saga/effects';
import { getCharacters } from '../../../services/api';
import { loadSuccess, loadFailure } from './actions';
import { CharactersTypes } from './types';

function* fetchSettlementListRequest() {
    try {
        const {
            data: { characters },
        } = yield call(getCharacters, '/characters');

        yield put(loadSuccess(characters));
    } catch (error) {
        yield put(loadFailure());
    }
}

export const CharactersSaga = [
    takeLatest(
        CharactersTypes.LOAD_CHARACTERS_REQUEST,
        fetchSettlementListRequest,
    ),
];
