import React from 'react';
import { ToastContainer } from 'react-toastify';

import './global.scss';

import Routes from './routes';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <>
            <Routes />
            <ToastContainer autoClose={3000} />
        </>
    );
}

export default App;
