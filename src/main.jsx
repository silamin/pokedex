// src/main.jsx
import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        {/* This wraps your entire tree in a Router context */}
        <RouterProvider router={router} />
    </StrictMode>
);
