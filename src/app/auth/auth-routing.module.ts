import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';

const routes: Routes = [{
  path:'',
  children: [
    { path: 'authentication', component :   AuthenticationComponent },
    { path: '**'            , redirectTo:   'authentication'        }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
