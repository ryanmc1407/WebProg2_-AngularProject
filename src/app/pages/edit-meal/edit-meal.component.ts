import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MealService } from '../../services/meal.service';

@Component({
  selector: 'app-edit-meal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-meal.component.html',
  styleUrl: './edit-meal.component.scss'
})
export class EditMealComponent implements OnInit {
  mealId!: string;
  mealForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private mealService: MealService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.mealId = this.route.snapshot.params['id'];

    this.mealForm = this.fb.group({
      mealType: ['', Validators.required],
      foodName: ['', Validators.required],
      calories: ['', Validators.required],
      protein: ['', Validators.required],
      carbs: ['', Validators.required],
      fat: ['', Validators.required],
    });

    this.loadMeal();
  }

  loadMeal() {
    this.mealService.getMealById(this.mealId).subscribe(meal => {
      this.mealForm.patchValue(meal);
    });
  }

  saveMeal() {
    if (this.mealForm.invalid) return;

    this.mealService.updateMeal(this.mealId, this.mealForm.value).subscribe(() => {
      this.router.navigate(['/meals']);
    });
  }
}
