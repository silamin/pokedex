// src/components/PokemonCard.jsx
import React, { useState, useEffect } from 'react';

export default function PokemonCard({ name, url, onSelect }) {
    const [sprite, setSprite] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(r => r.json())
            .then(d => setSprite(d.sprites.front_default));
    }, [url]);

    return (
        <div
            onClick={() => onSelect(url)}
            className="cursor-pointer border rounded p-2 flex flex-col items-center hover:bg-gray-100"
        >
            {sprite ? (
                <img
                    src={sprite}
                    alt={name}
                    className="w-16 h-16 object-contain"
                />
            ) : (
                // Tailwind skeleton box
                <div className="w-16 h-16 bg-gray-200 animate-pulse rounded" />
            )}

            <span className="capitalize mt-2">{name}</span>
        </div>
    );
}
