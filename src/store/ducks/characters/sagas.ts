import { call, put, takeLatest } from 'redux-saga/effects';
import { getCharacters } from '../../../services/api';
import { loadRequest, loadSuccess, loadFailure } from './actions';
import { CharactersTypes } from './types';

function* fetchSettlementListRequest({ payload }: any) {
    try {
        yield put(loadRequest());
        const {
            data: { characters },
        } = yield call(getCharacters, payload);

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
