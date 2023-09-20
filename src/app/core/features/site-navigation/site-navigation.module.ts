import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteNavigationRoutingModule } from './site-navigation-routing.module';
import { MainSectionComponent } from './components/main-section/main-section.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


@NgModule({
  declarations: [
    MainSectionComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SiteNavigationRoutingModule
  ],
  exports: [
    MainSectionComponent
  ]
})
export class SiteNavigationModule { }
