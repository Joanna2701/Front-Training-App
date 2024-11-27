import { Component, OnInit } from '@angular/core';
import { Training } from 'src/app/model/training.model';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainings-manager',
  templateUrl: './trainings-manager.component.html',
  styleUrls: ['./trainings-manager.component.css'],
})
export class TrainingsManagerComponent implements OnInit {
  listTrainings: Training[] | undefined;
  error: String | null = null;
  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.getAllTrainings();
  }

  getAllTrainings(): void {
    this.apiService.getTrainings().subscribe({
      next: (data) => (this.listTrainings = data),
      error: (err) => console.log(err.message),
      complete: () => (this.error = null),
    });
  }

  onAdd(): void {
    this.router.navigateByUrl('create-trainings');
  }
}
