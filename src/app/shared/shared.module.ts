import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material/material.module';
import { AddAssetCardComponent } from './components/add-asset-card/add-asset-card.component';
import { FormAuthValidationDirective } from './directives/form-auth-validation.directive';

@NgModule({
  declarations: [
    AddAssetCardComponent,
    FormAuthValidationDirective
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    MaterialModule,
    AddAssetCardComponent
  ]
})
export class SharedModule { }
