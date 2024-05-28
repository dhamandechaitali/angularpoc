import { Injectable } from '@angular/core';
import { User} from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserfunctionService {
  users:any[] =[
    {
      id:1,
      fname:"Chaitali",
      lname:"Dhamande",
      email:"c@gmail.com",
      password:"chaitali",
      active:true
    },
    {
      id:2,
      fname:"Rahul",
      lname:"Pandit",
      email:"r@gmail.com",
      password:"rahul",
      active:true
    },
    {
      id:3,
      fname:"Smita",
      lname:"Patil",
      email:"sm@gmail.com",
      password:"smita",
      active:true
    },
    {
      id:4,
      fname:"Puja",
      lname:"Pandit",
      email:"p@gmail.com",
      password:"puja",
      active:true
    },
    {
      id:5,
      fname:"Sam",
      lname:"Altman",
      email:"s@gmail.com",
      password:"sam",
      active:true
    },
    {
      id:6,
      fname:"John",
      lname:"Deere",
      email:"j@gmail.com",
      password:"john",
      active:true
    }
  ]

  constructor() { }
  // CRUD Functionality 

  // Create New User
  createUser(user: User) {
    this.users.push(user);
    return user;
  }

  // Get All users
  getUsers(){
    this.users = this.users.filter((u)=>u.active === true);
      return this.users;
  }

  // Get Specific user
  getUserById(id: Number){
    return this.users.find((u)=>u.id === id && u.active === true);
  }

  // Update Functionality 
  updateUser(user: User,id: Number) {
 
    this.users [ this.users .map((x, i) => [i, x]).filter(
      x => x[1] == (this.users.find((u)=>u.id === id && u.active === true)))[0][0]] = user;
    return user;
  }

  // Delete Functionality
  deleteUser(id: Number): Observable<void> {
    let user = this.users.find((u)=>u.id === id && u.active === true);
    if(user){
      console.log(JSON.stringify(user));
      user.active = false;
    }
    return user;
  }
}