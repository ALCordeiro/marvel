import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { CharactersState } from './ducks/characters/types';
import rootReducer from './ducks/rootReducer';
import { rootSagas } from './sagas';

export interface ApplicationState {
    characters: CharactersState;
}

const middleware = [];
const initialState = {};
const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)),
);

sagaMiddleware.run(rootSagas);

export default store;
