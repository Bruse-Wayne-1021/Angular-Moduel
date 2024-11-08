import { Component, OnDestroy, OnInit } from '@angular/core';
import { TaskService } from '../../task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { user } from '../../user-List/list/user-list/user-list.component';
import { UserService } from '../../User-Service/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']  
})
export class EditComponent implements OnInit, OnDestroy {

  addtaskForm: FormGroup; 
  CurrentId: number ;
  user:user[]=[];

  private subscription: Subscription = new Subscription();

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private userService:UserService
  ) {
    const tid = this.route.snapshot.paramMap.get("id");
    this.CurrentId =  Number(tid) ;



    this.addtaskForm = this.fb.group({
      id: [''],
      title: ['', [Validators.required]],
      description: [''],
      dueDate: [''],
      priority: ['', [Validators.required]],
      assigneeId:['']


    });
  }

  ngOnInit(): void {
    if (this.CurrentId !== null) {
      this.subscription.add(
        this.taskService.getTaskbyId(this.CurrentId).subscribe(
          data => this.addtaskForm.patchValue(data),
          error => console.error('Error fetching task', error) 
        )
      );
      this.userService.getuser().subscribe(data=>{
        this.user=data
      })
    }
  }




  ngOnDestroy(): void {
    this.subscription.unsubscribe(); 
  }

  onAddTask(): void {
    if (this.addtaskForm.valid) { 
      const task = this.addtaskForm.value;
      this.subscription.add(
        this.taskService.edittask(task,this.CurrentId).subscribe(
          () => this.router.navigate(["/"]),
          error => console.error('Error editing task', error) 
        )
      );
    }
  }

  cancel(): void {
    this.router.navigate(['/']); 
  }
}
