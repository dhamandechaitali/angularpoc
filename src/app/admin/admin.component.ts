import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserfunctionComponent } from './userfunction/userfunction.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
 
})
export class AdminComponent {
  constructor(private authService:AuthService){
  }
  sidebarOpen = true;

  Logout(){
    this.authService.logout();
  }

  toggleSidebar(){
    this.sidebarOpen = this.sidebarOpen? false : true;
  }
}

