import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
 
})
export class UserpageComponent {
  constructor(private authService:AuthService){

  }

  Logout(){
    this.authService.logout();
  }

}
