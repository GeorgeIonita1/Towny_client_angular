import { Injectable } from '@angular/core';

import { baseURL } from 'src/app/core/constants/apis';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  async getUsers() {
    const response = await fetch(`${baseURL}/users`);
    return await response.json() ?? [];
  }

  registerUser(email: string, password: string) {
    console.log(email, password);

    fetch(`${baseURL}/users/register`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
  }
}
