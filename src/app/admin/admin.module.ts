import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UserpageModule } from './userpage/userpage.module';

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    UserpageModule
  ]
})
export class AdminModule { }
