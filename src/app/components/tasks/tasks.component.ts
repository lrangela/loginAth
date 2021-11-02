import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { Task } from 'src/app/task.model';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private tasksServive: TasksService) { }

  ngOnInit() {
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
