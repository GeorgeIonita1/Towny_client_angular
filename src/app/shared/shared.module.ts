import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material/material.module';
import { AuthenticationFormComponent } from './components/authentication/authentication-form/authentication-form.component';
import { AuthenticationCardComponent } from './components/authentication/authentication-card/authentication-card.component';
import { AppRoutingModule } from '../app-routing.module';
import { AddNewAssetCardComponent } from './components/add-new-asset-card/add-new-asset-card.component';

@NgModule({
  declarations: [
    AuthenticationFormComponent,
    AuthenticationCardComponent,
    AddNewAssetCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    // AppRoutingModule
  ],
  exports: [
    MaterialModule,
    AuthenticationFormComponent,
    AuthenticationCardComponent,
    AddNewAssetCardComponent
  ]
})
export class SharedModule { }
