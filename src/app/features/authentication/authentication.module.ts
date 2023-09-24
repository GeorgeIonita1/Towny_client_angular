import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationCardComponent } from './authentication-card/authentication-card.component';
import { AuthenticationFormComponent } from './authentication-form/authentication-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    AuthenticationCardComponent,
    AuthenticationFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    AuthenticationCardComponent,
    AuthenticationFormComponent
  ]
})
export class AuthenticationModule { }
