/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CharacterInfosComponent } from '../CharacterInfos';
import store from '../../../store';
import { character } from '../../../utils/apiResponse';

let wrapper;

beforeEach(() => {
    wrapper = render(
        <Provider store={store}>
            <Router>
                <CharacterInfosComponent character={character.state} />
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

test('should show the correct text for title', () => {
    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe(
        'Rubick',
    );
});

test('should show the correct text for description', () => {
    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe(
        'The Grand magus',
    );
});
