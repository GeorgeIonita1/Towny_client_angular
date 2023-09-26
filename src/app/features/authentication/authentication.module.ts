import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationCardComponent } from './components/authentication-card/authentication-card.component';
import { AuthenticationFormComponent } from './components/authentication-form/authentication-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AuthenticationCardComponent,
    AuthenticationFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    AuthenticationCardComponent,
    AuthenticationFormComponent
  ]
})
export class AuthenticationModule { }
