import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages/pages.component';

const routes: Routes = [
  // path protegido / osea para usuarios logueados
  { 
    path: '', 
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress', component: DashboardComponent },
      { path: 'grafica1', component: Grafica1Component },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // para un path vacio, redirecciona a dashBoard
    ]
  },

  // para usuarios no logueados
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
 

  { path: '**', component: NopagefoundComponent }, //para cualquier ruta que no este definida en esta lista
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
