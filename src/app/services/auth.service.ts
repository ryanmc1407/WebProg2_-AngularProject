import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { TokenService } from './token.service';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${environment.apiUrl}/auth`;

  // Inject HttpClient and TokenService
  constructor(private http: HttpClient, private tokenService: TokenService) { }

  // LOGIN
  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}`, { email, password }).pipe(
      tap((res: any) => {
        if (res.accessToken) {
          this.tokenService.saveToken(res.accessToken);
        }
      })
    );
  }

  // CHECK IF USER IS LOGGED IN
  isLoggedIn(): boolean {
    return !!this.tokenService.getToken();
  }

  // LOGOUT
  logout(): void {
    this.tokenService.removeToken();
  }
}