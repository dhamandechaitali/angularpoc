import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
users:any[] =[
  {
    id:0,
    fname:"Chaitali",
    lname:"Dhamande",
    email:"c@gmail.com",
    password:"chaitali"
  },
  {
    id:1,
    fname:"Rahul",
    lname:"Pandit",
    email:"r@gmail.com",
    password:"rahul"
  }
]
 session:any;

  constructor(private router:Router) { 
    let session:any = localStorage.getItem('session');
    if(session){
      session = JSON.parse(session);
    } 
    this.session = session;
  }

  login(email: String,password: String){
    let user = this.users.find((u)=>u.email === email && u.password === password)
    if(user){
      this.session =user;
      localStorage.setItem('session',JSON.stringify(this.session))
    }
    return user;
  }

  logout(){
    this.session = undefined;
    localStorage.removeItem('session');
    this.router.navigateByUrl('/');
  }
}
