import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav className="p-4 bg-blue-500 text-white flex gap-4">
            <NavLink to="/" end className={({ isActive }) => isActive ? 'font-bold' : ''}>
                Pokedex
            </NavLink>
        </nav>
    );
}