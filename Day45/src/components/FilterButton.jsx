import React from 'react'
import { useFilterStore } from '../app/stores/filterStore';

const filters = ['all', 'active', 'completed'];

export default function FilterButton() {

  const {filter, setFilter} = useFilterStore();

  return (
    <div>
      { filters.map((f) => (
        <button key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 cursor-pointer ${filter === f ? 'font-bold' : ''}`} >
                  {f.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
