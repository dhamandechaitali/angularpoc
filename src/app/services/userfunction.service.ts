import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User} from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserfunctionService {
  users:any[] =[
    {
      id:0,
      fname:"Chaitali",
      lname:"Dhamande",
      email:"c@gmail.com",
      password:"chaitali",
      active:true
    },
    {
      id:1,
      fname:"Rahul",
      lname:"Pandit",
      email:"r@gmail.com",
      password:"rahul",
      active:true
    },
    {
      id:2,
      fname:"Chaitali",
      lname:"Dhamande",
      email:"c@gmail.com",
      password:"chaitali",
      active:true
    },
    {
      id:3,
      fname:"Rahul",
      lname:"Pandit",
      email:"r@gmail.com",
      password:"rahul",
      active:true
    },
    {
      id:4,
      fname:"Chaitali",
      lname:"Dhamande",
      email:"c@gmail.com",
      password:"chaitali",
      active:true
    },
    {
      id:5,
      fname:"Rahul",
      lname:"Pandit",
      email:"r@gmail.com",
      password:"rahul",
      active:true
    }
  ]

  // constructor(private httpClient: HttpClient) { }
  constructor() { }
  // CRUD Functionality 

  // // Create New User
  // createUser(user: User): Observable<User> {
  //   return this.httpClient.post<User>(this.apiUrl,user);
  // }

  // Get All users
  getUsers(){
    // return this.users.find((u)=>u.active = true);
    this.users = this.users.filter((u)=>u.active === true);
      return this.users;
  }

  // Get Specific user
  // getUserById(id: Number): Observable<User> {
  //   const url = `${this.apiUrl}/${id}`;
  //   return this.httpClient.get<User>(url);
  // }
  getUserById(id: Number){
    return this.users.find((u)=>u.id === id && u.active === true);
  }

  // // Update Functionality 
  // updateUser(user: User): Observable<User> {
  //   const url = `${this.apiUrl}/${user.id}`;
  //   return this.httpClient.put<User>(url, user);
  // }

  // Delete Functionality
  deleteUser(id: Number): Observable<void> {
    // const url = `${this.apiUrl}/${id}`;
    // return this.httpClient.delete<void>(url);
    let user = this.users.find((u)=>u.id === id && u.active === true);
    if(user){
      console.log(JSON.stringify(user));
      user.active = false;
    }
    return user;
  }
}