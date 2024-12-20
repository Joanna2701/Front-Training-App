import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainingsComponent } from './components/trainings/trainings.component';
import { CartComponent } from './components/cart/cart.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CustomerComponent } from './components/customer/customer.component';
import { OrderComponent } from './components/order/order.component';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TrainingsManagerComponent } from './components/trainings-manager/trainings-manager.component';
import { UsersManagerComponent } from './components/users-manager/users-manager.component';
import { CreateTrainingComponent } from './components/trainings-manager/create-trainings/create-trainings.component';
import { UpdateTrainingsComponent } from './components/trainings-manager/update-trainings/update-trainings.component';
import { CreateUsersComponent } from './components/users-manager/create-users/create-users.component';
import { UpdateUsersComponent } from './components/users-manager/update-users/update-users.component';

@NgModule({
  declarations: [
    AppComponent,
    TrainingsComponent,
    CartComponent,
    NotFoundComponent,
    CustomerComponent,
    OrderComponent,
    FormComponent,
    LoginComponent,
    DashboardComponent,
    TrainingsManagerComponent,
    UsersManagerComponent,
    CreateTrainingComponent,
    UpdateTrainingsComponent,
    CreateUsersComponent,
    UpdateUsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
