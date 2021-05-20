/* eslint-disable no-undef */
import { characters } from '../../../../utils/apiResponse';
import {
    loadFailure,
    loadRequest,
    loadSuccess,
    resetCharacters,
    searchCharactersRequest,
    searchCharactersSuccess,
    sortCharactersRequest,
    sortCharactersSuccess,
} from '../actions';
import reducer from '../index';

test('characters request', () => {
    const state = reducer(undefined, loadRequest());

    expect(state.loading).toBe(true);
});

test('characters success', () => {
    const state = reducer(undefined, loadSuccess(characters));

    expect(state.loading).toBe(false);
    expect(state.error).toBe(false);
    expect(state.characters).not.toStrictEqual([]);
    expect(state.characters).toStrictEqual(characters);
});

test('characters failure', () => {
    const state = reducer(undefined, loadFailure());
    expect(state.loading).toBe(false);
    expect(state.error).toBe(true);
    expect(state.characters).toStrictEqual([]);
});

test('characters search request', () => {
    const state = reducer(undefined, searchCharactersRequest(characters, 'AB'));
    expect(state.loading).toBe(true);
    expect(state.error).toBe(false);
});

test('characters search success', () => {
    const state = reducer(undefined, searchCharactersSuccess(characters));
    expect(state.loading).toBe(false);
    expect(state.error).toBe(false);
    expect(state.characters).not.toStrictEqual([]);
    expect(state.characters).toStrictEqual(characters);
});

test('characters sort request', () => {
    const state = reducer(undefined, sortCharactersRequest(characters));
    expect(state.loading).toBe(true);
    expect(state.error).toBe(false);
});

test('characters sort success', () => {
    const state = reducer(undefined, sortCharactersSuccess(characters));
    expect(state.loading).toBe(false);
    expect(state.error).toBe(false);
    expect(state.characters).not.toStrictEqual([]);
    expect(state.characters).toStrictEqual(characters);
});

test('characters failure', () => {
    const state = reducer(undefined, resetCharacters());
    expect(state.loading).toBe(false);
    expect(state.error).toBe(false);
    expect(state.characters).toStrictEqual([]);
});
