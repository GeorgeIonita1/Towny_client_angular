import { Injectable } from '@angular/core';

import { baseURL } from 'src/app/core/constants/apis';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor() {}
  
  async getUsers() {
    const response = await fetch(`${baseURL}/users`);
    return await response.json() ?? [];
  }
}
