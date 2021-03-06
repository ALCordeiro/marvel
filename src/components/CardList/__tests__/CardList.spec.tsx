/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import { CardListComponent } from '../CardList';
import { characters } from '../../../utils/apiResponse';

let wrapper;

beforeEach(() => {
    wrapper = render(
        <Router>
            <CardListComponent characters={characters} />
        </Router>,
    );
});

test('should render', async () => {
    const { container } = wrapper;
    expect(container.firstChild);
});

test('loads and displays correct card', async () => {
    expect(wrapper.getByRole('heading')).toHaveTextContent('3-D Man');
});

test('should match snapshot', () => {
    const { container } = wrapper;
    expect(container.firstChild).toMatchSnapshot();
});
