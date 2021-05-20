import { Reducer } from 'redux';
import {
    CharactersState,
    LOAD_CHARACTERS_FAILURE,
    LOAD_CHARACTERS_REQUEST,
    LOAD_CHARACTERS_SUCCESS,
    SEARCH_CHARACTERS_SUCCESS,
    SEARCH_CHARACTERS_REQUEST,
    SORT_CHARACTERS_SUCCESS,
    SORT_CHARACTERS_REQUEST,
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
                characters: [...action.payload, ...state.characters],
            };
        case LOAD_CHARACTERS_FAILURE:
            return { ...state, loading: false, error: true, characters: [] };
        case SEARCH_CHARACTERS_REQUEST:
            return { ...state, loading: true };
        case SEARCH_CHARACTERS_SUCCESS:
            return {
                ...state,
                loading: false,
                characters: action.payload.payload || action.payload,
            };
        case SORT_CHARACTERS_REQUEST:
            return { ...state, loading: true };
        case SORT_CHARACTERS_SUCCESS:
            return {
                ...state,
                loading: false,
                characters: action.payload.payload || action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
