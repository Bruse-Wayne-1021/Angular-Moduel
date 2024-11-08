import { Component, OnInit } from '@angular/core';
import { Address, UserService } from '../../../User-Service/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit{

  user:user[]=[];
  searchUser:string=''
  

  constructor(private UserService:UserService ,private tostr:ToastrService){

  }

  ngOnInit(): void {
    this.UserService.getuser().subscribe(data=>{
      this.user=data;
      console.log(data);
      
      
      
      
    })
  }

  ondelete(id:number){
    if(confirm("Do you Want delete")){
      this.UserService.DeleteByid(id).subscribe(data=>{
        this.tostr.success('task deleted')
      })
    }
  }
}


export interface user{

  id:number,
  nic:string,
  firstName:string,
  lastName:string,
  email:string,
  password:string,
  address?:Address
}
