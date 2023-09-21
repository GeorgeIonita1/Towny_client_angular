import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material/material.module';
import { AddAssetCardComponent } from './components/add-asset-card/add-asset-card.component';

@NgModule({
  declarations: [
    AddAssetCardComponent
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
