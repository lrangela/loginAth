import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { Task } from 'src/app/task.model';

@Component({
  selector: 'app-private-tasks',
  templateUrl: './private-tasks.component.html',
  styleUrls: ['./private-tasks.component.css']
})
export class PrivateTasksComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private tasksServive: TasksService) { }

  ngOnInit(){
    this.tasksServive.getTasks()
    .subscribe(
      (tasks: Task[]) => {
        console.log(tasks)
        this.tasks = tasks;
      },
      err => console.log(err)
    )
  }

}
