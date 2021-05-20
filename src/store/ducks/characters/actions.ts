/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { action } from 'typesafe-actions';
import {
    LOAD_CHARACTERS_REQUEST,
    LOAD_CHARACTERS_SUCCESS,
    LOAD_CHARACTERS_FAILURE,
    Character,
    SEARCH_CHARACTERS_SUCCESS,
    SEARCH_CHARACTERS_REQUEST,
    SORT_CHARACTERS_SUCCESS,
    SORT_CHARACTERS_REQUEST,
    RESET_CHARACTERS,
} from './types';

export const loadRequest = (offset?: () => number) =>
    action(LOAD_CHARACTERS_REQUEST, offset);

export const loadSuccess = (characters: Character[]) =>
    action(LOAD_CHARACTERS_SUCCESS, characters);

export const loadFailure = () => action(LOAD_CHARACTERS_FAILURE);

export const resetCharacters = () => action(RESET_CHARACTERS);

export const searchCharactersSuccess = (characters: any) =>
    action(SEARCH_CHARACTERS_SUCCESS, characters);

export const searchCharactersRequest = (characters: any, search: string) =>
    action(SEARCH_CHARACTERS_REQUEST, characters, search);

export const sortCharactersSuccess = (characters: any) =>
    action(SORT_CHARACTERS_SUCCESS, characters);

export const sortCharactersRequest = (characters: any) =>
    action(SORT_CHARACTERS_REQUEST, characters);
