import { Reducer } from 'redux';
import {
    CharactersState,
    LOAD_CHARACTERS_FAILURE,
    LOAD_CHARACTERS_REQUEST,
    LOAD_CHARACTERS_SUCCESS,
} from './types';

const INITIAL_STATE: CharactersState = {
    characters: [],
    error: false,
    loading: false,
};

const reducer: Reducer<CharactersState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD_CHARACTERS_REQUEST:
            return { ...state, loading: true };
        case LOAD_CHARACTERS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                characters: action.payload,
            };
        case LOAD_CHARACTERS_FAILURE:
            return { ...state, loading: false, error: true, characters: [] };
        default:
            return state;
    }
};

export default reducer;
