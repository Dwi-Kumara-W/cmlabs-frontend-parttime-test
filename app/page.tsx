'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { SearchBar } from './components/molecules/SearchBar';

export default function IngredientsPage() {
  const [ingredients, setIngredients] = useState<any[]>([]);
  const API_URL = process.env.NEXT_PUBLIC_MEAL_API_URL;
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch(`${API_URL}/list.php?i=list`)
      .then((res) => res.json())
      .then((data) => {
        setIngredients(data.meals || []);
      })
      .catch((err) => console.error("Gagal mengambil data:", err));
  }, []);

  const filtered = ingredients.filter((ing) =>
    ing.strIngredient.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-black text-gray-900 mb-2 tracking-tight">
            The Meal <span className="text-orange-600">DB</span>
          </h1>
          <p className="text-gray-500 font-medium">
            Select an ingredient to see available meals
          </p>
        </header>

        <div className="max-w-xl mx-auto mb-16">
          <SearchBar 
            placeholder="Search ingredients..." 
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} 
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.slice(0, 100).map((ing) => (
            <Link 
              key={ing.idIngredient}
              href={`/ingredient/${encodeURIComponent(ing.strIngredient)}`}
              className="group p-8 bg-white rounded-[2rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 text-center flex flex-col items-center"
            >
              {/* Gambar Bahan dari API */}
              <div className="w-28 h-28 mb-4 relative flex items-center justify-center">
                <img 
                  src={`https://www.themealdb.com/images/ingredients/${ing.strIngredient}-Small.png`} 
                  alt={ing.strIngredient}
                  className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <h3 className="font-bold text-gray-900 text-lg leading-tight">
                {ing.strIngredient}
              </h3>
              
              <p className="text-orange-500 text-xs font-bold mt-3 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wider">
                Explore Recipes
              </p>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-gray-400 text-xl">
              No ingredients found for <span className="font-bold">"{search}"</span>
            </p>
          </div>
        )}
      </div>
    </main>
  );
}