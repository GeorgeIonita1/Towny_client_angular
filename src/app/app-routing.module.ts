import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './core/pages/login/login.component';
import { RegisterPageComponent } from './core/pages/register/register.component';
import { HomePageComponent } from './core/pages/home-page/home-page.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  {
    path: 'home',
    component: HomePageComponent,
    children: [
      {
        path: 'views',
        loadChildren: () => import('./core/features/site-navigation/site-navigation.module')
          .then(m => m.SiteNavigationModule)
      }

    ]
  }
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
