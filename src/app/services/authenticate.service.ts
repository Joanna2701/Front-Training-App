import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticateService {
  userIsLogged: boolean = false;
  isAdmin: boolean = false;

  constructor(private router: Router) {
    this.getUserFromLocalStorage();
  }

  setUserToLocalStorage(user: any): void {
    localStorage.setItem('user', JSON.stringify(user));
  }
  getUserFromLocalStorage(): boolean {
    const userData = localStorage.getItem('user');
    if (userData) {
      this.userIsLogged = true;
      return true;
    }
    return false;
  }

  verifyUser(userData: any, formPassword: string): void {
    if (userData[0].password === formPassword) {
      this.userIsLogged = true;
      this.setUserToLocalStorage(userData);
      this.checkIfAdmin();
    } else console.log('Une des valeurs est incorrecte');
  }

  isLoggedIn(): Boolean {
    if (this.userIsLogged) {
      return true;
    }
    return false;
  }

  checkIfAdmin(): boolean {
    const admin = this.getUserFromLocalStorage();
    if (admin) {
      return true;
    }
    return false;
  }

  onLogout(): void {
    localStorage.removeItem('user');
    this.router.navigateByUrl('');
  }
}
