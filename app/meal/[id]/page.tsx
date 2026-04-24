'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function MealDetailPage() {
  const { id } = useParams();
  const API_URL = process.env.NEXT_PUBLIC_MEAL_API_URL;
  const [meal, setMeal] = useState<any>(null);

  useEffect(() => {
    fetch(`${API_URL}/lookup.php?i=${id}`)
      .then(res => res.json())
      .then(data => setMeal(data.meals[0]));
  }, [id]);

  if (!meal) return <div className="h-screen flex items-center justify-center font-bold text-orange-500">Loading...</div>;

  return (
    <main className="min-h-screen bg-white pb-20">
      <div className="container mx-auto px-6 pt-10">
        <Link href={`/ingredient/${meal.strIngredient1}`} className="text-sm font-bold text-orange-500 uppercase tracking-widest hover:underline">
          {meal.strArea} Culinary
        </Link>
        <h1 className="text-5xl font-extrabold text-gray-900 mt-2 mb-10 leading-tight">{meal.strMeal}</h1>

        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl mb-10">
              <img src={meal.strMealThumb} className="w-full object-cover" alt={meal.strMeal} />
            </div>
            
            {meal.strYoutube && (
              <div className="rounded-[2.5rem] overflow-hidden shadow-lg bg-black aspect-video">
                <iframe 
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${meal.strYoutube.split('v=')[1]}`}
                  title="YouTube video player"
                  allowFullScreen
                />
              </div>
            )}
          </div>

          <div className="lg:col-span-5">
            <div className="bg-gray-50 rounded-[2.5rem] p-10 border border-gray-100">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 italic">Instructions</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                {meal.strInstructions.split('\r\n').map((step: string, i: number) => (
                  step.length > 5 && <p key={i} className="pl-4 border-l-4 border-orange-200">{step}</p>
                ))}
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800 italic">Recipes</h2>
              <ul className="grid grid-cols-1 gap-3">
                {[...Array(20)].map((_, i) => {
                  const ingredient = meal[`strIngredient${i + 1}`];
                  const measure = meal[`strMeasure${i + 1}`];
                  if (ingredient && ingredient !== "") {
                    return (
                      <li key={i} className="flex justify-between items-center bg-white p-3 rounded-xl shadow-sm">
                        <span className="text-gray-700">{ingredient}</span>
                        <span className="font-bold text-orange-500">{measure}</span>
                      </li>
                    );
                  }
                  return null;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}