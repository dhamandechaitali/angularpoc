import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserpageComponent } from './userpage.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [UserpageComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule
  ],
  exports: [
    UserpageComponent
  ]
})
export class UserpageModule { }
