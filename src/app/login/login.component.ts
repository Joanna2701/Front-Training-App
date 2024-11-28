import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticateService } from '../services/authenticate.service';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  myLoginForm: FormGroup;

  error: String | null = null;

  constructor(
    public authenticateService: AuthenticateService,
    private router: Router,
    private apiService: ApiService
  ) {
    this.myLoginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  ngOnInit(): void {}

  onSubmit(myLoginForm: FormGroup): void {
    this.getUserByMail(myLoginForm);
  }

  getUserByMail(myLoginForm: FormGroup): void {
    this.apiService.getUserByMail(myLoginForm.value.email).subscribe({
      next: (data) =>
        this.authenticateService.verifyUser(data, myLoginForm.value.password),
      error: (err) => (this.error = err),
      complete: () => (this.error = null),
    });
  }
}
