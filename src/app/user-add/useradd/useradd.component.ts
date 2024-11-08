import { Component } from '@angular/core';
import { UserService } from '../../User-Service/user.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-useradd',
  templateUrl: './useradd.component.html',
  styleUrl: './useradd.component.css'
})
export class UseraddComponent {


  adduserForm:any;

  constructor(private UserService:UserService,private fb:FormBuilder,private router:Router){
    this.adduserForm=this.fb.group({
      nic:['',[Validators.required]],
      firstName:[''],
      lastName:[''],
      email:[''],
      password:['',[Validators.required]],
      address:this.fb.group({
        addressLine1:['',[Validators.required]],
        addressLine2:[''],
        city:['']
      })
    })
  }

  user:any;
  onAdduser(){
    this.user=(this.adduserForm.value)
    this.UserService.PostUser(this.user).subscribe(data=>{
      this.router.navigate(['/userList'])
    })
  }

  cancel(){

  }

}
