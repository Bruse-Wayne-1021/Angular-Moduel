import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../user-List/list/user-list/user-list.component';
import { Registration } from '../Registration';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  UserUrl="http://localhost:5152/api/Users";
  Registration="http://localhost:5152/api/Register/Registration";
  
  constructor(private http:HttpClient) {

   }


   getuser(){
    return this.http.get<any[]>(this.UserUrl)
   }

   PostUser(user:user){
    return this.http.post(this.UserUrl,user)
   }

   DeleteByid(id:number){
    return this.http.delete(this.UserUrl+"/"+id)
   }

   getByid(id:number){
    return this.http.get<user>(this.UserUrl+"/"+id)
   }
   
   editUser(user:user){
    return this.http.put(this.UserUrl+"/"+user.id,user)
   }
   RegisterUser(newUser:Registration){
    return this.http.post(this.Registration,newUser)
   }
}




export interface Address{
  id: number;
  addressline1: string;
  addressline2: string;
  city: string;
}