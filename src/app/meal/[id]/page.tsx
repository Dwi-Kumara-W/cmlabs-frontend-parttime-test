'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function MealDetailPage() {
  const { id } = useParams();
  const [meal, setMeal] = useState<any>(null);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(res => res.json())
      .then(data => setMeal(data.meals[0]));
  }, [id]);

  if (!meal) return <div className="p-10 text-center">Loading...</div>;

  return (
    <main className="container mx-auto p-4 lg:p-12">
      <div className="grid lg:grid-cols-2 gap-12">
        <img src={meal.strMealThumb} className="rounded-3xl shadow-2xl w-full" />
        <div>
          <h1 className="text-4xl font-extrabold mb-4">{meal.strMeal}</h1>
          <div className="flex gap-3 mb-6">
            <span className="px-4 py-1 bg-orange-100 text-orange-700 rounded-full font-bold">{meal.strCategory}</span>
            <span className="px-4 py-1 bg-blue-100 text-blue-700 rounded-full font-bold">{meal.strArea}</span>
          </div>
          <h2 className="text-2xl font-bold mb-3">Instructions</h2>
          <p className="text-gray-600 whitespace-pre-line leading-relaxed">{meal.strInstructions}</p>
        </div>
      </div>

      {meal.strYoutube && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Video Tutorial</h2>
          <iframe 
            className="w-full aspect-video rounded-3xl shadow-lg"
            src={`https://www.youtube.com/embed/${meal.strYoutube.split('v=')[1]}`}
          />
        </div>
      )}
    </main>
  );
}