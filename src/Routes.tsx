import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './core/components/Navbar';
import After from './pages/After';
import Before from './pages/Before';
import Home from './pages/Home';

const Routes = () => (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/before">
                <Before />
            </Route>
            <Route path="/after">
                <After />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;