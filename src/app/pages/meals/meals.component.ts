import { Component } from '@angular/core';
import { MealService } from '../../services/meal.service';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-meals',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './meals.component.html',
  styleUrl: './meals.component.scss'
})
export class MealsComponent {
  meals: any[] = [];

  constructor(
    private mealService: MealService,
    private router: Router
  ) {}


loadMeals() {
  this.mealService.getMeals().subscribe(res => {
    this.meals = res.meals;
  });
}

  editMeal(meal: any) {
    this.router.navigate(['/meals/edit', meal._id]);
  }

  deleteMeal(meal: any) {
    if (!confirm('Are you sure?')) return;
    this.mealService.deleteMeal(meal._id).subscribe(() => {
      this.loadMeals();
    });
  }
}
