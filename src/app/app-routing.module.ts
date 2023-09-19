import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';
import { LoginPageComponent } from './core/pages/login/login.component';
import { RegisterPageComponent } from './core/pages/register/register.component';

const appRoutes: Routes = [
  { path: 'home', component: HeaderComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
