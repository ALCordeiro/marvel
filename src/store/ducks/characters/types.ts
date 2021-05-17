/* eslint-disable no-unused-vars */
/**
 * Action Types
 */
export const LOAD_CHARACTERS_REQUEST = 'LOAD_CHARACTERS_REQUEST';
export const LOAD_CHARACTERS_SUCCESS = 'LOAD_CHARACTERS_SUCCESS';
export const LOAD_CHARACTERS_FAILURE = 'LOAD_CHARACTERS_FAILURE';

/**
 * Data types
 */
export interface Character {
    id: number;
    name: string;
}

/**
 * State types
 */
export interface CharactersState {
    readonly characters: Character[];
    readonly loading: boolean;
    readonly error: boolean;
}
