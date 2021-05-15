import { action } from 'typesafe-actions';
import { CharactersTypes, Character } from './types';

export const loadRequest = () =>
    action(CharactersTypes.LOAD_CHARACTERS_REQUEST);

export const loadSuccess = (characters: Character[]) =>
    action(CharactersTypes.LOAD_CHARACTERS_SUCCESS, characters);

export const loadFailure = () =>
    action(CharactersTypes.LOAD_CHARACTERS_FAILURE);
