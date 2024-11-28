import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-users-manager',
  templateUrl: './users-manager.component.html',
  styleUrls: ['./users-manager.component.css'],
})
export class UsersManagerComponent implements OnInit {
  listOfUsers: any[] | undefined;
  error: String | null = null;

  constructor(private router: Router, private apiService: ApiService) {
    this.getAllUsers();
  }

  ngOnInit(): void {}

  getAllUsers() {
    this.apiService.getUsers().subscribe({
      next: (data) => (this.listOfUsers = data),
      error: (err) => (this.error = err),
      complete: () => (this.error = null),
    });
  }

  onAdd(): void {
    this.router.navigateByUrl('create-users');
  }
}
