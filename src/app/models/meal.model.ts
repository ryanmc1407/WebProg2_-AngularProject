export interface Meal {
  _id?: string;            // MongoDB ID
  userId?: string;         // Connected user
  date: string;            // ISO string from backend
  mealType: string;        // Breakfast / Lunch / Dinner
  foodName: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}
