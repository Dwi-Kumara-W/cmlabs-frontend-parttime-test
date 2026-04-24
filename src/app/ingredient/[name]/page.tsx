'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function IngredientDetailPage() {
  const params = useParams();
  const name = params.name as string;
  const [meals, setMeals] = useState<any[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${name}`)
      .then(res => res.json())
      .then(data => setMeals(data.meals || []));
  }, [name]);

  const filteredMeals = meals.filter(meal => 
    meal.strMeal.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="container mx-auto p-4 md:p-8">
      <Link href="/" className="text-orange-500 font-medium mb-4 inline-block">← Back to Ingredients</Link>
      <h1 className="text-3xl font-bold mb-8">Meals with {decodeURIComponent(name)}</h1>

      <input 
        type="text" 
        placeholder="Search meals..."
        className="w-full max-w-md mb-8 p-3 border rounded-xl"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMeals.map((meal) => (
          <Link 
            key={meal.idMeal}
            href={`/meal/${meal.idMeal}`}
            className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100"
          >
            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h3 className="font-bold text-lg text-gray-800">{meal.strMeal}</h3>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}