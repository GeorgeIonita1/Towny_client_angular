import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersService } from './services/users.service';
import { UserCardComponent } from './components/user-card/user-card.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    UsersListComponent,
    UserCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    UsersListComponent
  ]
})
export class UsersModule { }
