import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 form:FormGroup = this.fb.group(
  { 
    email: ['', Validators.required],
    password: ['', Validators.required]
  }
 );

 constructor(private authService: AuthService, private fb: FormBuilder, private router:Router, private snackBar: MatSnackBar){
 }

 showSuccessMessage(message: string){
  this.snackBar.open(message, 'Close', {
    duration: 3000
  })
}
 login(){
  let user = this.authService.login(this.form.value.email,this.form.value.password);

  if(!user){
    this.showSuccessMessage("Invalid username or password");
   
  }else{
    this.router.navigateByUrl('/admin');
  }
 }
}
