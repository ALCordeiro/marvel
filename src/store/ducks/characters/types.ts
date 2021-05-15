/* eslint-disable no-unused-vars */
/**
 * Action Types
 */
export enum CharactersTypes {
    LOAD_CHARACTERS_REQUEST = '@characters/LOAD_REQUEST',
    LOAD_CHARACTERS_SUCCESS = '@characters/LOAD_SUCCESS',
    LOAD_CHARACTERS_FAILURE = '@characters/LOAD_FAILURE',
}

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
