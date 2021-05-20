/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { HeaderCharactersDetailsComponent } from '../HeaderCharactersDetails';
import store from '../../../store';

let wrapper;

beforeEach(() => {
    wrapper = render(
        <Provider store={store}>
            <Router>
                <HeaderCharactersDetailsComponent />
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

test('should render with a link tag', () => {
    const { container } = wrapper;
    expect(container.firstChild.firstChild.firstChild.nodeName).toBe('A');
    expect(document.querySelector('a').getAttribute('href')).toBe('/');
});

test('should render with a IMG tag', () => {
    const { container } = wrapper;
    expect(container.firstChild.firstChild.firstChild.firstChild.nodeName).toBe(
        'IMG',
    );
    expect(document.querySelector('img').getAttribute('alt')).toBe(
        'marvel-logo',
    );
});
