import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { UserfunctionService } from 'src/app/services/userfunction.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

  userId!: Number;

  private destory$: Subject<void> = new Subject<void>();

  constructor(private router: ActivatedRoute,
    private route: Router,
    private matSnackBar : MatSnackBar,
    private userfunctionService: UserfunctionService) {
    this.userId = parseInt(this.router.snapshot.paramMap.get("id") || ''
    );

    this.userfunctionService.deleteUser(this.userId)
    this.showSuccessMessage("User Details Deleted Successfully"); 
    this.route.navigate(['admin/userfunction']);
  }

  showSuccessMessage(message: string){
    this.matSnackBar.open(message, 'Close', {
      duration: 3000,
    });
  }

  ngOnDestroy(){
    this.destory$.next();
    this.destory$.complete();
  }
}

