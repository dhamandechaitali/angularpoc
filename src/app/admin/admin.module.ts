// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// import { AdminRoutingModule } from './admin-routing.module';
// import { AdminComponent } from './admin.component';
// import { UserpageModule } from './userpage/userpage.module';


// @NgModule({
//   declarations: [
//     AdminComponent
//   ],
//   imports: [
//     CommonModule,
//     AdminRoutingModule,
//     UserpageModule,
   
//   ]
// })
// export class AdminModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
// import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
// import {MatSidenavModule} from '@angular/material/sidenav';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from '../sidebar/sidebar.component';
import {MatListModule} from '@angular/material/list';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { UserfunctionModule } from './userfunction/userfunction.module';
// import { UserfunctionComponent } from '../userfunction/userfunction.component';

@NgModule({
  declarations: [
    AdminComponent,
    SidebarComponent,
    // UserfunctionComponent
  ],
  imports: [
    AdminRoutingModule,
    UserfunctionModule,
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatListModule,
    MatSnackBarModule,
    FormsModule
  ]
  // exports: [
  //   adminComponent
  // ]
})
export class AdminModule { }
