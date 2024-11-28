import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTrainingsComponent } from './update-trainings.component';

describe('UpdateTrainingsComponent', () => {
  let component: UpdateTrainingsComponent;
  let fixture: ComponentFixture<UpdateTrainingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTrainingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
