// src/components/Pagination.jsx
import React from 'react';

export default function Pagination({ page, onPrevious, onNext, hasPrevious, hasNext }) {
    return (
        <div className="w-full grid grid-cols-3 items-center my-4">
            <button
                onClick={onPrevious}
                disabled={!hasPrevious}
                className="justify-self-start px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
                Previous
            </button>

            <span className="text-center font-medium">
                Page {page + 1}
            </span>

            <button
                onClick={onNext}
                disabled={!hasNext}
                className="justify-self-end px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
                Next
            </button>
        </div>
    );
}
