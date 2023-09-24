import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { IUser } from '../../models';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
  usersList: IUser[] = [];

  constructor(private usersService: UsersService) {
    this.usersService.getUsers().then(res => this.usersList = res)
  }
}
