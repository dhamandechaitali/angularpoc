import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UserfunctionModule } from './userfunction/userfunction.module';
import { UserfunctionComponent } from './userfunction/userfunction.component';

const routes: Routes = [
  {
    path:'',
    component: AdminComponent,
    children:[
      {path:'userfunction', component: UserfunctionComponent}
  ]
  },
  {
    path:'userfunction', 
    loadChildren: ()=>
      import('../admin/userfunction/userfunction.module').then((m) => m.UserfunctionModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
