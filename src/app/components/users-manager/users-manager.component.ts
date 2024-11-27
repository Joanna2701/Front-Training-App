import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/services/authenticate.service';

@Component({
  selector: 'app-users-manager',
  templateUrl: './users-manager.component.html',
  styleUrls: ['./users-manager.component.css'],
})
export class UsersManagerComponent implements OnInit {
  listOfUsers: any[] | undefined;

  constructor(
    private authenticateService: AuthenticateService,
    private router: Router
  ) {
    this.getAllUsers();
  }

  ngOnInit(): void {}

  getAllUsers() {
    this.listOfUsers = this.authenticateService.users;
  }
}
