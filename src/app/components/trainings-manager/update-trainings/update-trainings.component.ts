import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-update-trainings',
  templateUrl: './update-trainings.component.html',
  styleUrls: ['./update-trainings.component.css'],
})
export class UpdateTrainingsComponent implements OnInit {
  updateForm: FormGroup;
  trainingId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {
    this.updateForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params) => {
        this.trainingId = parseInt(params['id']);
        this.getTraining();
      },
      error: (err) => console.log(err),
    });
  }

  getTraining(): void {
    this.apiService.getTraining(this.trainingId).subscribe({
      next: (data) => {
        this.updateForm = new FormGroup({
          id: new FormControl(data.id),
          name: new FormControl(data.name, [Validators.required]),
          description: new FormControl(data.description, [Validators.required]),
          price: new FormControl(data.price, [Validators.required]),
          quantity: new FormControl(data.quantity),
        });
      },
      error: (err) => console.log(err),
    });
  }

  onSubmit(form: FormGroup) {
    this.apiService.updateTraining(this.trainingId, form.value).subscribe({
      next: () => {
        this.router.navigateByUrl('trainings-manager');
        console.log('La formation a bien été modifiée');
      },
    });
  }
}
