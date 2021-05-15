import { all } from 'redux-saga/effects';
import { CharactersSaga } from './ducks/characters/sagas';

export function* rootSagas() {
    yield all([...CharactersSaga]);
}
