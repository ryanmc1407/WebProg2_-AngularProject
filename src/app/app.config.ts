import { ApplicationConfig } from '@angular/core';
import { Routes, provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { authInterceptor } from './services/auth.interceptor';
import { LoginComponent } from './pages/login/login.component';
import { MealsComponent } from './pages/meals/meals.component';
import { EditMealComponent } from './pages/edit-meal/edit-meal.component';

export const routes:Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' satisfies 'full' | undefined },
  { path: 'login', component: LoginComponent },
  { path:'meals', component: MealsComponent },
  { path: 'meals/edit/:id', component: EditMealComponent },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),

    provideHttpClient(
      withInterceptors([
        authInterceptor
      ])
    )
  ]
};
