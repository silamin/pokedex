// src/router.jsx
import React from 'react';
import { createHashRouter } from 'react-router-dom';
import App from './App';
import PokedexPage from './pages/PokedexPage';

export const router = createHashRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element: <PokedexPage /> }
        ]
    }
]);
