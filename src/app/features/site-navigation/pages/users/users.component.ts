import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  ngOnInit() {
    console.log('george')
    // fetch('http://localhost:3000/cars')
    //   .then(res => res.json())
    //   .then(res => console.log(res));

    // fetch('http://localhost:3000/drivers', {
    //   method: "POST",
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ id: "22", name: "Florin", email: "florin@hotmail.com", password: "paswweredf" })
    // })
    //   .then(res => console.log(res))
  }
}
