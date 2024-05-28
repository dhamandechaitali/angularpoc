import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserfunctionService } from 'src/app/services/userfunction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  editUserForm!: FormGroup;

  userId: number = 0;
  userData: User | null = null;
  private destroy$ : Subject<void> = new Subject<void>();

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private router: Router,
    private userfunctionService: UserfunctionService) {

      this.editUserForm = this.formBuilder.group({
        id: ['', [Validators.required]],
        fname: ['', [Validators.required]],
        lname: ['', [Validators.required]],
        email: ['', Validators.required],
        password: ['', Validators.required],
        active: ['', Validators.required]
      });
  }

  ngOnInit(){
    const id = parseInt(this.route.snapshot.paramMap.get("id") || '');
    this.userId = id;

    if(id !== 0){
      let data : User =this.userfunctionService.getUserById(id);
      console.log("id: "+id);
      this.userData = data;
      console.log(this.userData);
      this.editUserForm.patchValue(this.userData);
    }
  }

  onSubmit(){
    if(this.editUserForm.valid){
      const updatedFormData: User = this.editUserForm.value;
      this.userfunctionService.updateUser(updatedFormData,this.userId);
      console.log("Edited User",JSON.stringify(updatedFormData));
      this.showSuccessMessage("User Details Edited Successfully"); 
      this.router.navigate(['admin/userfunction']);
    }
  }

  showSuccessMessage(message: string){
    this.snackBar.open(message, 'Close', {
      duration: 3000
    })
  }

  ngOnDestory(){
    this.destroy$.next();
    this.destroy$.complete();
  }
}

