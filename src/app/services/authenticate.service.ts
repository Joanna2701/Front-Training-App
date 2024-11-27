import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AuthenticateService {
  public users = [
    { email: 'elbab@gmail.com', password: '1234', roles: ['ADMIN', 'USER'] },
    { email: 'hugo@gmail.com', password: '1234', roles: ['USER'] },
  ];

  userIsLogged: boolean = false;
  isAdmin: boolean = false;

  constructor() {}

  setUserToLocalStorage(user: any): void {
    localStorage.setItem('user', JSON.stringify(user));
  }
  getUserFromLocalStorage(): void {}

  verifyUser(myLoginForm: FormGroup): void {
    const user = this.users.find(
      (user) => myLoginForm.value.email === user.email
    );

    if (user) {
      if (myLoginForm.value.password === user.password) {
        console.log('connected');
        this.userIsLogged = true;
        this.setUserToLocalStorage(user);
        this.isAdmin = this.checkIfAdmin(user);
      } else console.log('Une des valeurs est incorrecte');
    } else console.log('Utilisateur non reconnu');

    //     this.users.forEach((user) => {
    //       if (myLoginForm.value.email === user.email) {
    //         console.log(`email correct: ${user.email}`);
    //         if (myLoginForm.value.password === user.password) {
    //           console.log(user.password);
    //         } else {
    //           console.log('Password invalide');
    //         }
    //       } else {
    //         console.log('Email invalide');
    //       }
    //     });
  }

  isLoggedIn(): Boolean {
    if (this.userIsLogged) {
      return true;
    }
    return false;
  }

  checkIfAdmin(user: any): boolean {
    const admin = user.roles.find((role: any) => 'ADMIN' === role);
    if (admin) {
      return true;
    }
    return false;
  }

  onLogout(): void {}
}
