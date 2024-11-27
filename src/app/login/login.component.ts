import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticateService } from '../services/authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  myLoginForm: FormGroup;

  constructor(
    public authenticateService: AuthenticateService,
    private router: Router
  ) {
    let userFromLocalStorage =
      this.authenticateService.getUserFromLocalStorage();
    this.myLoginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  ngOnInit(): void {}

  onSubmit(myLoginForm: FormGroup): void {
    this.authenticateService.verifyUser(myLoginForm);
  }
}
