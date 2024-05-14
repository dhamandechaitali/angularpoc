import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  // standalone:true,
  // imports:[MatButtonModule]
})
export class LoginComponent {
 form:FormGroup = this.fb.group(
  { 
    email: ['', Validators.required],
    password: ['', Validators.required]
  }
 );

 constructor(private authService: AuthService, private fb: FormBuilder, private router:Router){

 }

 login(){
  let user = this.authService.login(
    this.form.value.email,
    this.form.value.password
  );

  if(!user){
    alert('Invalid username or password');
  }else{
    this.router.navigateByUrl('/admin');
  }
 }
}
