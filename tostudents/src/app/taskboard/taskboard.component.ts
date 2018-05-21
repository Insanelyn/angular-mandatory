import { Component } from '@angular/core';
import { Task, StatusType } from '../constants';
import { TaskService } from '../task.service';

@Component({
  selector: 'task-board',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.css']
})
export class TaskboardComponent {
  private statusList = [StatusType.NotStarted, StatusType.InProgress, StatusType.Completed];
  taskList: Task[] = [];
  showTaskForm = false;
  constructor(private taskService: TaskService) {}

  ngOnInit() {

  }

  /*filterTasks(statusType: StatusType, taskList: Task[]) {
    return this.taskService.filterTasks(statusType, taskList);
  }*/

  changeValueTaskForm(){
    this.showTaskForm = !this.showTaskForm;
  }

  saveInput(param) {
    this.taskService.addTask(param.title, param.description);
    this.showTaskForm = !this.showTaskForm;
  }

}
