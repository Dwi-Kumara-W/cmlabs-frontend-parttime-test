import Link from "next/link";

export const MealGrid = ({ meals }: { meals: any[] }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {meals.map((meal) => (
      <Link key={meal.idMeal} href={`/meal/${meal.idMeal}`} className="group">
        <div className="relative overflow-hidden rounded-3xl aspect-[4/5] shadow-lg">
          <img src={meal.strMealThumb} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={meal.strMeal} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
            <h3 className="text-white font-bold text-xl leading-tight">{meal.strMeal}</h3>
          </div>
        </div>
      </Link>
    ))}
  </div>
);