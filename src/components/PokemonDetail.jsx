// src/components/PokemonDetail.jsx
import React, { useState, useEffect } from 'react';

export default function PokemonDetail({ url, onClose }) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(r => r.json())
            .then(setData);
    }, [url]);

    // loading skeleton
    if (!data) {
        return (
            <div className="fixed inset-0 flex justify-center items-center pointer-events-none">
                <div className="w-64 h-48 bg-gray-100 rounded animate-pulse" />
            </div>
        );
    }

    return (
        // semi-transparent black backdrop at 20% opacity
         <div className="fixed inset-0 flex justify-center items-center bg-black/20 backdrop-blur-sm  ">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold capitalize">{data.name}</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-600 hover:text-gray-900"
                    >
                        ✕
                    </button>
                </div>

                <div className="flex justify-center mb-4">
                    <img
                        src={data.sprites.front_default}
                        alt={data.name}
                        className="w-24 h-24"
                    />
                </div>

                <div className="space-y-2 mb-4">
                    <p><strong>Height:</strong> {data.height}</p>
                    <p><strong>Weight:</strong> {data.weight}</p>
                    <p><strong>Types:</strong> {data.types.map(t => t.type.name).join(', ')}</p>
                    <p><strong>Abilities:</strong> {data.abilities.map(a => a.ability.name).join(', ')}</p>
                </div>

                <h3 className="font-semibold mb-2">Stats</h3>
                <ul className="list-disc list-inside space-y-1">
                    {data.stats.map(s => (
                        <li key={s.stat.name}>
                            {s.stat.name}: {s.base_stat}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
