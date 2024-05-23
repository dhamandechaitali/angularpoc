import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './public/landing/landing.component';
import { authGuard } from './guard/auth.guard';
import { SidebarComponent } from './sidebar/sidebar.component';
const routes: Routes = [
  {
    path:'', 
    loadChildren: ()=>
      import('./public/public.module').then((m) => m.PublicModule),
  },
  {
    path:'admin', 
    loadChildren: ()=>
      import('./admin/admin.module').then((m) => m.AdminModule),
    canActivate: [authGuard]
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'logout',
    component: LandingComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
