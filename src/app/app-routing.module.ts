import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { TrainingsComponent } from './components/trainings/trainings.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CustomerComponent } from './components/customer/customer.component';
import { OrderComponent } from './components/order/order.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TrainingsManagerComponent } from './components/trainings-manager/trainings-manager.component';
import { UsersManagerComponent } from './components/users-manager/users-manager.component';
import { CreateTrainingComponent } from './components/trainings-manager/create-trainings/create-trainings.component';
import { UpdateTrainingsComponent } from './components/trainings-manager/update-trainings/update-trainings.component';
import { CreateUsersComponent } from './components/users-manager/create-users/create-users.component';
import { UpdateUsersComponent } from './components/users-manager/update-users/update-users.component';
import { AdminGuard } from './components/admin/admin.guard';

const routes: Routes = [
  { path: 'trainings', component: TrainingsComponent }, // Cette route affiche le composant TrainingsComponent quand l'URL est '/trainings'.
  { path: 'cart', component: CartComponent }, // Affiche le composant CartComponent lorsque l'URL est '/cart'.
  { path: 'order', component: OrderComponent }, // Affiche le composant OrderComponent lorsque l'URL est '/order'.
  { path: 'login', component: LoginComponent }, // Depuis le bouton Se connecter, on arrive dans le composant html login
  { path: 'customer', component: CustomerComponent, canActivate: [AdminGuard] }, // Affiche le composant CustomerComponent lorsque l'URL est '/customer'.
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'trainings-manager',
    component: TrainingsManagerComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'users-manager',
    component: UsersManagerComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'create-trainings',
    component: CreateTrainingComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'update-trainings/:id',
    component: UpdateTrainingsComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'create-users',
    component: CreateUsersComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'update-users/:id',
    component: UpdateUsersComponent,
    canActivate: [AdminGuard],
  },
  { path: '404', component: NotFoundComponent }, // Cette route affiche le composant NotFoundComponent pour '/404'.
  { path: '', redirectTo: 'trainings', pathMatch: 'full' }, // Si l'URL est vide ('/'), redirige vers '/trainings'.
  { path: '**', redirectTo: '/404' }, // Cette route gère toutes les URL non définies et les redirige vers '/404'.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
