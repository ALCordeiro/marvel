/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { action } from 'typesafe-actions';
import {
    LOAD_CHARACTERS_REQUEST,
    LOAD_CHARACTERS_SUCCESS,
    LOAD_CHARACTERS_FAILURE,
    Character,
} from './types';

export const loadRequest = (offset?: () => number) =>
    action(LOAD_CHARACTERS_REQUEST, offset);

export const loadSuccess = (characters: Character[]) =>
    action(LOAD_CHARACTERS_SUCCESS, characters);

export const loadFailure = () => action(LOAD_CHARACTERS_FAILURE);
