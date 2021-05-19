/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { HeaderComponent } from '../Header';
import store from '../../../store';

const characters: any = [
    {
        comics: {
            available: 12,
            collectionURI:
                'http://gateway.marvel.com/v1/public/characters/1011334/comics',
            items: Array(12),
            returned: 12,
        },
        description: '',
        events: {
            available: 1,
            collectionURI:
                'http://gateway.marvel.com/v1/public/characters/1011334/events',
            items: Array(1),
            returned: 1,
        },
        id: 1011334,
        modified: '2014-04-29T14:18:17-0400',
        name: '3-D Man',
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011334',
        series: {
            available: 3,
            collectionURI:
                'http://gateway.marvel.com/v1/public/characters/1011334/series',
            items: Array(3),
            returned: 3,
        },
        stories: {
            available: 21,
            collectionURI:
                'http://gateway.marvel.com/v1/public/characters/1011334/stories',
            items: Array(20),
            returned: 20,
        },
        thumbnail: {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
            extension: 'jpg',
        },
        map: () => 'test',
        length: () => 1,
        filter: () => 'test',
    },
];

let wrapper;

beforeEach(() => {
    wrapper = render(
        <Provider store={store}>
            <Router>
                <HeaderComponent characters={characters} />
            </Router>
        </Provider>,
    );
});

test('should render', async () => {
    const { container } = wrapper;
    expect(container.firstChild);
});

test('should match snapshot', () => {
    const { container } = wrapper;
    expect(container.firstChild).toMatchSnapshot();
});

test('should render with a div as first child', () => {
    const { container } = wrapper;
    expect(container.firstChild.nodeName).toBe('DIV');
});

test('should show the correct text for h2', () => {
    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe(
        'Explore o Universo',
    );
});

test('should show the correct text for h3', () => {
    expect(screen.getByRole('heading', { level: 3 }).textContent).toBe(
        'Mergulhe no domínio deslumbrante de todos os personagens que você ama - e aqueles que você descobrirá em breve!',
    );
});
