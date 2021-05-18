import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Characters from './pages/Characters';
import CharactersDetails from './pages/CharactersDetails';

const Routes: React.FunctionComponent = () => (
    <Switch>
        <Route exact path="/">
            <Characters />
        </Route>
        <Route path="/details?id=:id">
            <CharactersDetails />
        </Route>
    </Switch>
);

export default Routes;
