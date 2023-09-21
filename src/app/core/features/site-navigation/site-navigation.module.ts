import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteNavigationRoutingModule } from './site-navigation-routing.module';
import { MainSectionComponent } from './components/main-section/main-section.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarCategoryBtnComponent } from './components/sidebar-category-btn/sidebar-category-btn.component';
import { UsersComponent } from './pages/users/users.component';
import { CarsComponent } from './pages/cars/cars.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MainSectionComponent,
    DashboardComponent,
    SidebarComponent,
    SidebarCategoryBtnComponent,
    UsersComponent,
    CarsComponent,
  ],
  imports: [
    CommonModule,
    SiteNavigationRoutingModule,
    MaterialModule,
    SharedModule
  ],
  exports: [
    MainSectionComponent,
    SidebarComponent
  ]
})
export class SiteNavigationModule { }
