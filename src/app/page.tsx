'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function IngredientsPage() {
  const [ingredients, setIngredients] = useState<any[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
      .then(res => res.json())
      .then(data => setIngredients(data.meals || []));
  }, []);

  const filtered = ingredients.filter(ing => 
    ing.strIngredient.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-orange-600 mb-2">The Meal DB</h1>
        <p className="text-center text-gray-500 mb-10">Select an ingredient to see available meals</p>
        
        {/* Search Input */}
        <div className="max-w-md mx-auto mb-12">
          <input 
            type="text" 
            placeholder="Search ingredients..."
            className="w-full p-4 rounded-2xl border-none shadow-lg focus:ring-2 focus:ring-orange-500 outline-none text-gray-700"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Ingredients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((ing) => (
            <Link 
              key={ing.idIngredient}
              href={`/ingredient/${encodeURIComponent(ing.strIngredient)}`}
              className="p-6 bg-white rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all border border-gray-100 text-center"
            >
              <div className="text-3xl mb-2">🍲</div>
              <h3 className="font-bold text-gray-800 text-lg">{ing.strIngredient}</h3>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-400">No ingredients found.</div>
        )}
      </div>
    </main>
  );
}