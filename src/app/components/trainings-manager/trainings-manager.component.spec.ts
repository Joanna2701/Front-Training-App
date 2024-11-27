import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingsManagerComponent } from './trainings-manager.component';

describe('TrainingsManagerComponent', () => {
  let component: TrainingsManagerComponent;
  let fixture: ComponentFixture<TrainingsManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingsManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
