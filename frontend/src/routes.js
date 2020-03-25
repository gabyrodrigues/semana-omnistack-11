import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch> {/* o switch garante que sejam executadas apenas uma rota por verz */}
                <Route path="/" exact component={Logon} /> {/* o exact garante não haver conflito com outras rotas */}
                <Route path="/register" component={Register} />
            </Switch>
        </BrowserRouter>
    );
}