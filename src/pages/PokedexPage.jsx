// src/pages/PokedexPage.jsx
import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Pagination from '../components/Pagination';
import PokemonList from '../components/PokemonList';
import PokemonDetail from '../components/PokemonDetail';

const LIMIT = 20;

export default function PokedexPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const page = Math.max(0, parseInt(searchParams.get('page') ?? '0', 10));

    const [list, setList] = React.useState([]);
    const [totalCount, setTotalCount] = React.useState(0);
    const [selectedUrl, setSelectedUrl] = React.useState(null);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}&offset=${page * LIMIT}`)
            .then(res => res.json())
            .then(data => {
                setList(data.results);
                setTotalCount(data.count);
            });
    }, [page]);

    const goToPage = (newPage) => {
        setSearchParams({ page: newPage.toString() });
    };

    return (
        <div className="p-4">
            {/* 1) Grid of cards */}
            <PokemonList pokemons={list} onSelect={url => setSelectedUrl(url)} />

            {/* 2) Pagination full-width */}
            <Pagination
                page={page}
                hasPrevious={page > 0}
                hasNext={(page + 1) * LIMIT < totalCount}
                onPrevious={() => goToPage(page - 1)}
                onNext={() => goToPage(page + 1)}
            />

            {/* 3) Inline detail panel, if any */}
            {selectedUrl && (
                <PokemonDetail url={selectedUrl} onClose={() => setSelectedUrl(null)} />
            )}

            {/* 4) About section */}
            <section className="p-4 bg-gray-50 rounded">
                <h1 className="text-3xl font-bold">About This Pok&eacute;dex</h1>
                <p>
                    A simple React/Vite Pok&eacute;dex using the free Pok&eacute;API. Browse, paginate, and view details…
                </p>
            </section>

        </div>
    );
}
