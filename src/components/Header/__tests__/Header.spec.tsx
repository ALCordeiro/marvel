/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { HeaderComponent } from '../Header';
import store from '../../../store';
import { characters } from '../../../utils/apiResponse';

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
