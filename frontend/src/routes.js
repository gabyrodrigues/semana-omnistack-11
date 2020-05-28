import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';
import EditIncident from './pages/EditIncident';
import EditOng from './pages/EditOng';
import NotFound from './pages/NotFound';
import PrivateRoute from './components/Auth/PrivateRoute';
import PublicRoute from './components/Auth/PublicRoute';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch> {/* o switch garante que sejam executadas apenas uma rota por verz */}
                <PublicRoute path="/" exact component={Logon} /> {/* o exact garante não haver conflito com outras rotas */}
                <PublicRoute path="/register" component={Register} />
                <PrivateRoute path="/profile" component={Profile} />
                <PrivateRoute path="/incidents/new" component={NewIncident} />
                <PrivateRoute path="/incidents/edit/:id" component={EditIncident} />
                <PrivateRoute path="/ongs/edit" component={EditOng} />
                <Route path='*' exact={true} component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}