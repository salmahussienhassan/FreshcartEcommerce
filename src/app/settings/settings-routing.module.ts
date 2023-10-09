
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {  path:'',redirectTo:'change' ,pathMatch:'full'},
  {  path:'change' ,component:ChangePasswordComponent},

  {  path:'forget' ,component:ForgetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
