import { Component } from '@angular/core';
import { UserService } from '../../User-Service/user.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Registration } from '../../Registration';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  PassWord!:string;
  

  RegisterForm:any;
constructor(private RegistrationService:UserService,private Router:Router,private FormBuilder:FormBuilder,){
  this.RegisterForm=this.FormBuilder.group({
    fullName:['',[Validators.required]],
    email:['',[Validators.required]],
    password:['',[Validators.required]],
    role:['']
  })
}



  RegisterUser:any;

  RegUser(){
    try {
      this.RegisterUser=(this.RegisterForm.value);
      this.RegistrationService.RegisterUser(this.RegisterUser).subscribe(data=>{
      this.Router.navigate(['/login'])
      })
    } catch (error) {
      alert(error)
    }
  }




}
