import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Meal } from '../models/meal.model';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  private apiUrl = `${environment.apiUrl}/meals`;

  constructor(private http: HttpClient) {}

  // GET all meals for logged-in user
 getMeals(): Observable<{ meals: Meal[] }> {
  return this.http.get<{ meals: Meal[] }>(this.apiUrl);
}


  // GET a single meal by ID
  getMealById(id: string): Observable<Meal> {
    return this.http.get<Meal>(`${this.apiUrl}/${id}`);
  }

  // POST create a new meal
  addMeal(meal: Meal): Observable<any> {
    return this.http.post(this.apiUrl, meal);
  }

  // PUT update a meal
  updateMeal(id: string, meal: Partial<Meal>): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, meal);
  }

  // DELETE a meal
  deleteMeal(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
