import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserfunctionService } from 'src/app/services/userfunction.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  private subscription: Subscription | undefined;

  constructor(private userfunctionService:UserfunctionService,
    private router: Router,
    private matSnackBar : MatSnackBar,){
  }

  newUser: User = {
    id: 0,
    fname: "",
    lname: "",
    email: "",
    password: "",
    active : true
  }
  
  saveUser(){
      this.userfunctionService.createUser(this.newUser)
      this.showSuccessMessage("User Details Added Successfully"); 
      this.router.navigate(['admin/userfunction']);
  }

  showSuccessMessage(message: string){
    this.matSnackBar.open(message, 'Close', {
      duration: 3000,
    });
  } 

  ngOnDestroy(){
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
