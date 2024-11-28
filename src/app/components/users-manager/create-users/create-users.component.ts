import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.css'],
})
export class CreateUsersComponent implements OnInit {
  createForm: FormGroup;

  constructor(private apiService: ApiService, private router: Router) {
    this.createForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      roles: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.createForm.value);

    if (this.createForm.valid) {
      this.apiService.createUser(this.createForm.value).subscribe({
        next: () => {
          console.log('Formation créé avec succès.');
          this.router.navigateByUrl('users-manager');
        },
        error: (error: any) => console.log(error),
      });
    }
  }
}
