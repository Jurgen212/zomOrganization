import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';


const routes: Routes = [{
  path:'',
  children: [
    { path: 'contacts', component :   ContactsComponent },
    { path: '**'      , redirectTo:   'contacts'        }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoCallRoutingModule { }
