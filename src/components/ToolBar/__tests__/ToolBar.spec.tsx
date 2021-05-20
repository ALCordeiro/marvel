/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../store';
import ToolBarComponent from '../ToolBar';
import { characters } from '../../../utils/apiResponse';

let wrapper;

beforeEach(() => {
    wrapper = render(
        <Provider store={store}>
            <Router>
                <ToolBarComponent characters={characters} />
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
