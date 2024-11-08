import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../User-Service/user.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ActiveToast } from 'ngx-toastr';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css'
})
export class UserEditComponent  implements OnInit{

  addUserform:any;
  currentId:number | null;
  private subcription:Subscription=new Subscription()

  constructor(
    private userService:UserService,
    private router:Router,
    private route:ActivatedRoute,
    private fb:FormBuilder){
      const tid=this.route.snapshot.paramMap.get("id");
      this.currentId=tid? Number(tid):null;

      this.addUserform=this.fb.group({
        id:[''],
        nic:[''],
        firstName:[''],
        lastName:[''],
        email:[''],
        password:[''],
        address:this.fb.group({
          addressline1:[''],
          addressline2:[''],
          city:['']
        })

      })

  }
  ngOnInit(): void {
    if(this.currentId!==null){
      this.subcription.add(

        this.userService.getByid(this.currentId).subscribe(
          data=>this.addUserform.patchValue(data),
         
          
          error=>console.error(error)
         
          
          
        )
      );
    }
  }

  onAddUser(){
    if(this.addUserform.valid){
      const user=this.addUserform.value;
      this.subcription.add(
        this.userService.editUser(user).subscribe(
          ()=>this.router.navigate(["userList"]),
          error=>console.log(error)
          
        )
      )
    }
  }


  



}
