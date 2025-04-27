import React from 'react';
import PokemonCard from './PokemonCard';

export default function PokemonList({ pokemons, onSelect }) {
    return (
        <div className="grid grid-cols-4 gap-4">
            {pokemons.map(p => (
                <PokemonCard key={p.name} name={p.name} url={p.url} onSelect={onSelect} />
            ))}
        </div>
    );
}