/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AddMoreCharactersComponent } from '../AddMoreCharacters';

let wrapper;

beforeEach(() => {
    wrapper = render(
        <Router>
            <AddMoreCharactersComponent />
        </Router>,
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

test('should render with a title', () => {
    const { container } = wrapper;
    expect(container.firstChild.firstChild.nodeName).toBe('title');
});

test('should render with a svg', () => {
    const { container } = wrapper;
    expect(container.firstChild.nodeName).toBe('svg');
});
