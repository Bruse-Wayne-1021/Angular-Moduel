import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './Task-List/list/list.component';
import { AddComponent } from './Task-add/add/add.component';
import { EditComponent } from './Task-Edit/edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SearchPipe } from './Search Pipe/search.pipe';
import { UserListComponent } from './user-List/list/user-list/user-list.component';
import { UseraddComponent } from './user-add/useradd/useradd.component';
import { UserEditComponent } from './User-edit/user-edit/user-edit.component';
import { UserSearchPipe } from './Search Pipe/user-search.pipe';
import { RegistrationComponent } from './Registration/registration/registration.component';
import { LoginComponent } from './Login/login/login.component';

import { BlankLayoutComponent } from './layout/blank-layout/blank-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddComponent,
    EditComponent,
    SearchPipe,
    UserListComponent,
    UseraddComponent,
    UserEditComponent,
    UserSearchPipe,
    RegistrationComponent,
    LoginComponent,
    AdminLayoutComponent,
    BlankLayoutComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
        ToastrModule.forRoot() // ToastrModule added

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
