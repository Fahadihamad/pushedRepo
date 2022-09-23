import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AboutUsComponent } from './Pages/about-us/about-us.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { CreateUserComponent } from './Pages/create-user/create-user.component';
import { HelpComponent } from './Pages/help/help.component';
import { HomeComponent } from './Pages/home/home.component';
import { TeamComponent } from './Pages/team/team.component';
import { UerDetailsComponent } from './Pages/uer-details/uer-details.component';

import { UpdateUserComponent } from './Pages/update-user/update-user.component';

import { UserListComponent } from './Pages/user-list/user-list.component';

const routes: Routes = [
  {
    path:"",
    component:MainLayoutComponent,
    children:[
      {
        path:"",
        component:HomeComponent
      },
      {
        path:"About Us",
        component:AboutUsComponent
      },
      {
        path:"Team",
        component:TeamComponent
      },
      {
        path:"Help",
        component:HelpComponent
      },
      {
        path:"Contact",
        component:ContactComponent
      }
    ]
  },
  {
    path:"Form",
    component:FormComponent
  },
  {
    path:"MainLayout",
    component:MainLayoutComponent
  },
  {
    path:"list",
    component:UserListComponent
  },
  {
    path:"create_user",
    component:CreateUserComponent
  },
  {
    path:"update/:id",
    component:UpdateUserComponent
  },
  {
    path:"userDetails/:id",
    component:UerDetailsComponent
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
