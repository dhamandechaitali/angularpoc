import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UserpageComponent } from './userpage/userpage.component';

const routes: Routes = [
  {
    path:'',
    component: AdminComponent,
    children:[{path:'', component: UserpageComponent}]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
