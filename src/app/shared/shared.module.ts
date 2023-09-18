import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { AuthenticationFormComponent } from './components/authentication/authentication-form/authentication-form.component';
import { AuthenticationCardComponent } from './components/authentication/authentication-card/authentication-card.component';

@NgModule({
  declarations: [
    AuthenticationFormComponent,
    AuthenticationCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    AuthenticationFormComponent,
    AuthenticationCardComponent
  ]
})
export class SharedModule { }
