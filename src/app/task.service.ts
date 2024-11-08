import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from './Task-List/list/list.component';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  taskurl="http://localhost:5152/api/TaskItems"

  constructor(private  http:HttpClient) {


   }

   getTask(){
      return this.http.get<any[]>(this.taskurl)
   }

   createTask( task:Task){
    return this.http.post(this.taskurl ,task)
   }

   DeleteTask(id:number){
    return this.http.delete(this.taskurl +"/"+id )
   }

   getTaskbyId(taskId:number){
    return this.http.get<Task>(this.taskurl +"/"+taskId)
   }

   edittask(task:Task,taskid:number){
    return this.http.put(this.taskurl+"/"+taskid,task)
   }




}
