import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './containers/login/login.component';

const routes: Routes = [
    { path: '', redirectTo: '/Login', pathMatch: 'full', },
    { path: '', component: LoginComponent },
    { path: 'Login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
