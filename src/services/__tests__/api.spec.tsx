/* eslint-disable no-undef */
import MockAdapter from 'axios-mock-adapter';
import { getCharacters, instance } from '../api';

const apiMock = new MockAdapter(instance);

test('should get Characters', done => {
    const mockTest = ['teste'];
    apiMock.onGet().reply(200, mockTest);

    getCharacters().then(response => {
        expect(mockTest).toStrictEqual(response.data);
        done();
    });
});
