import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Training } from '../model/training.model';
import { User } from '../model/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public getTrainings() {
    return this.http.get<Training[]>(environment.host + '/trainings');
  }

  public getTraining(id: number) {
    return this.http.get<Training>(environment.host + '/trainings/' + id);
  }

  public create(value: any): any {
    return this.http.post<any>(environment.host + '/trainings/', value);
  }

  public getUsers() {
    return this.http.get<any[]>(environment.host + '/users');
  }

  public getUser(id: number) {
    return this.http.get<any>(environment.host + '/users/' + id);
  }

  public createUser(user: User): Observable<User> {
    return this.http.post<User>(environment.host + '/users/', user);
  }

  public getUserByMail(email: string) {
    return this.http.get<any>(environment.host + '/users?email=' + email);
  }

  public updateTraining(id: number, form: any) {
    return this.http.put<any>(environment.host + '/trainings/' + id, form);
  }

  public deleteTraining(id: number) {
    return this.http.delete<any>(environment.host + '/trainings/' + id);
  }
}
