import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  ngOnInit() {
    console.log('george')
    fetch('http://localhost:3000/posts')
      .then(res => res.json())
      .then(res => console.log(res));

    fetch('http://localhost:3000/dogs', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: "22", "title": "GGGG", status: "fffff" })
    })
      .then(res => console.log(res))
  }
}
