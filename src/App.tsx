import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/global';
import Routes from './Routes';

const App: React.FunctionComponent = () => (
    <BrowserRouter>
        <Routes />
        <GlobalStyles />
    </BrowserRouter>
);

export default App;
