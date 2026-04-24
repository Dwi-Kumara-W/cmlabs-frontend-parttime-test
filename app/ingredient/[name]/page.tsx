'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function IngredientDetailPage() {
  const params = useParams();
  const name = decodeURIComponent(params.name as string);
  const API_URL = process.env.NEXT_PUBLIC_MEAL_API_URL;
  const [meals, setMeals] = useState<any[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch(`${API_URL}/filter.php?i=${name}`)
      .then(res => res.json())
      .then(data => setMeals(data.meals || []));
  }, [name]);

  const filtered = meals.filter(m => m.strMeal.toLowerCase().includes(search.toLowerCase()));

  return (
    <main className="min-h-screen bg-white">
      <nav className="p-6 text-sm text-gray-500 container mx-auto">
        <Link href="/" className="hover:text-orange-500">Home</Link> / 
        <span className="ml-2 text-gray-900 font-semibold">{name}</span>
      </nav>

      <div className="container mx-auto px-6 pb-20">
        <h1 className="text-5xl font-bold text-gray-900 mb-8">{name} Meals</h1>

        <div className="relative max-w-xl mb-12 group">
          <input 
            type="text" 
            placeholder="Search for a specific meal..."
            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-100 text-gray-900 placeholder-gray-500 focus:bg-white focus:ring-4 focus:ring-orange-200 focus:border-orange-500 border-2 border-transparent outline-none transition-all shadow-sm group-hover:border-gray-200"
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="absolute left-4 top-4 text-xl text-orange-600">
            <svg 
              className="h-5 w-5 text-gray-400 group-focus-within:text-orange-500 transition-colors" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
              />
            </svg>
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filtered.map((meal) => (
            <Link key={meal.idMeal} href={`/meal/${meal.idMeal}`} className="group">
              <div className="relative overflow-hidden rounded-3xl aspect-[4/5] shadow-lg">
                <img 
                  src={meal.strMealThumb} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  alt={meal.strMeal} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                  <h3 className="text-white font-bold text-xl leading-tight">{meal.strMeal}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}