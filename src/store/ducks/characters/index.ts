import { Reducer } from 'redux';
import { CharactersState, CharactersTypes } from './types';

const INITIAL_STATE: CharactersState = {
    characters: [],
    error: false,
    loading: false,
};

const reducer: Reducer<CharactersState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CharactersTypes.LOAD_CHARACTERS_REQUEST:
            return { ...state, loading: true };
        case CharactersTypes.LOAD_CHARACTERS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                characters: action.payload,
            };
        case CharactersTypes.LOAD_CHARACTERS_FAILURE:
            return { ...state, loading: false, error: true, characters: [] };
        default:
            return state;
    }
};

export default reducer;
