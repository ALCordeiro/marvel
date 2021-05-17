import { call, put, takeLatest } from 'redux-saga/effects';
import { getCharacters } from '../../../services/api';
import { loadSuccess, loadFailure } from './actions';
import { CharactersTypes } from './types';

function* fetchCharactersListRequest() {
    console.log('ta caindo dentro da saga');
    try {
        const {
            data: {
                data: { results },
            },
        } = yield call(getCharacters);

        yield put(loadSuccess(results));
    } catch (error) {
        console.log('ERRO NO SAGA', error);
        yield put(loadFailure());
    }
}

export const CharactersSaga = [
    takeLatest(
        CharactersTypes.LOAD_CHARACTERS_REQUEST,
        fetchCharactersListRequest,
    ),
];
