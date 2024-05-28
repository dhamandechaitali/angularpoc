import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserfunctionService } from 'src/app/services/userfunction.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  userDetails!: User;
  userId!: Number;

  private destroy$: Subject<void> = new Subject<void>();

  constructor(private usersService: UserfunctionService,
    private snackBar: MatSnackBar,
    private router: ActivatedRoute) 
  {
    this.userId = parseInt(this.router.snapshot.paramMap.get("id") || ''); 
    let data : User =this.usersService.getUserById(this.userId);
    this.showSuccessMessage("User Details Loaded Successfully");
    this.userDetails = data;
  }

  showSuccessMessage(message: string){
    this.snackBar.open(message, 'Close', {
      duration: 3000
    })
  }

  ngOnDestroy(){
    this.destroy$.next();
    this.destroy$.complete();
  }
}