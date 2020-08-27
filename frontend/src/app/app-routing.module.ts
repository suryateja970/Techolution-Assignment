import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsertableComponent } from './usertable/usertable.component';
import { UserformComponent } from './userform/userform.component';

const routes: Routes = [
  {
path:'',redirectTo:'/table',pathMatch:'full'
  },
  {
    path:'table',component:UsertableComponent

  },
  {
    path:'form',component:UserformComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
