 import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankloginComponent } from './banklogin/banklogin.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:`register`,component:RegisterComponent
  },
  {
    path:``,component:BankloginComponent
  },
  {
    path:`homepage`,component:HomepageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
