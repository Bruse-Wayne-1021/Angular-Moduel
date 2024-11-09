import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './Task-add/add/add.component';
import { ListComponent } from './Task-List/list/list.component';
import { EditComponent } from './Task-Edit/edit/edit.component';
import { UserListComponent } from './user-List/list/user-list/user-list.component';
import { UseraddComponent } from './user-add/useradd/useradd.component';
import { UserEditComponent } from './User-edit/user-edit/user-edit.component';
import { RegistrationComponent } from './Registration/registration/registration.component';
import { LoginComponent } from './Login/login/login.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { BlankLayoutComponent } from './layout/blank-layout/blank-layout.component';

const routes: Routes = [
    {
      path:'admin',component:AdminLayoutComponent,
      children:[
        {path:'List',component:ListComponent},
        {path:'add',component:AddComponent},
        {path:'edit/:id',component:EditComponent},
        {path:'userList',component:UserListComponent},
        {path:'user-add',component:UseraddComponent},
        {path:'user-edit/:id',component:UserEditComponent},
       
      ]
    },{
      path:'',component:BlankLayoutComponent,
      children:[
        {path:'Registration',component:RegistrationComponent},
        {path:'login',component:LoginComponent}
      ]
    }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
