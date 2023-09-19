import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material/material.module';
import { AuthenticationFormComponent } from './components/authentication/authentication-form/authentication-form.component';
import { AuthenticationCardComponent } from './components/authentication/authentication-card/authentication-card.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    AuthenticationFormComponent,
    AuthenticationCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule
  ],
  exports: [
    MaterialModule,
    AuthenticationFormComponent,
    AuthenticationCardComponent
  ]
})
export class SharedModule { }
