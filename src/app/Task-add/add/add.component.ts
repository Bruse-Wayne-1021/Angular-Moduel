import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../task.service';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { user } from '../../user-List/list/user-list/user-list.component';
import { UserService } from '../../User-Service/user.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent implements OnInit {


  addtaskForm:any;
  user:user[]=[];

   
  


  constructor( private Taskserive:TaskService,private fb:FormBuilder,private router:Router,private UserService:UserService){
    this.addtaskForm=this.fb.group({
      title:['',[Validators.required]],
      description:[''],
      dueDate:[''],
      Priority:['',[Validators.required]],
      assigneeId:[''],
      checkList:this.fb.array([])
    })

  }
  ngOnInit(): void {
    this.UserService.getuser().subscribe(data=>{
      this.user=data;
    })
  }

  task:any;


  onAddTask(){
    this.task=(this.addtaskForm.value);
    this.Taskserive.createTask(this.task).subscribe(data=>{
      this.router.navigate(['/'])
    })
  } 


  
  
  cancel(){

  }

  get mychecklist():FormArray{
    return this.addtaskForm.get('checkList') as FormArray;
  }

  addCheckList(){
    this.mychecklist.push(this.fb.group({
      name:[''],
      isDone:false
    }))
  }

  removeCheckList(index:number){
    this.mychecklist.removeAt(index)
  }
}
